// node는 webpack을 안쓰기 때문에 import, export를 사용하지 않음
const express = require('express');

const { Post, Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async(req, res, next) => { // GET /posts
    try{
        const posts = await Post.findAll({
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
            }, {
                model: Image,
            }],
        });
        console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }

})

router.post('/', isLoggedIn, async (req, res, next ) => { // POST /post
    try {
        const post = await Post.create({
        content: req.body.content,
        UserId: req.user.id,
    });
    const fullPost = await PermissionStatus.findOne({
        where: {id: post.id},
        include: [{
            model: Image,
        }, {
            model: Comment,
        }, {
            model: User,
        }]
    })
    res.status(201).json(fullPost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next ) => { // POST /post/comment
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
        });
        if (!post) {
            return res.status(403).send('존재하지 않는 게시글입니다.');
        }
        const comment = await Comment.create({
            content: req.body.content,
            PostId: req.params.postId,
            UserId: req.user.id,
        })
        res.status(201).json(comment);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/', (req, res) => { // DELETE /post
    res.json({ id: 1 });
});

module.exports = router;