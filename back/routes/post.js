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
    const fullPost = await Post.findOne({
        where: {id: post.id},
        include: [{
            model: Image,
        }, {
            model: Comment,
            include: [{ // 댓글 작성자
                model: User,
                atrributes: ['id', 'nicknanme']
            }]
        }, {
            model: User, // 게시글 작성자
            attributes: ['id', 'nickname'],
        }, {
            model: User, // 좋아요 누른 사람
            as: 'Likers',
            attributes: ['id'],
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
            PostId: parseInt(req.params.postId, 10),
            UserId: req.user.id,
        })
        const fullComment = await Comment.findOne({
            where: {id: comment.id},
            include:[{
                model: User,
                attributes: ['id', 'nickname'],
            }],
        })
        res.status(201).json(fullComment);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => { //PATCH /post/1/like
    try {
        const post = await Post.findOne({ where: {id: req.params.postId}});
        if(!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.')
        }
        await post.addLikers(req.user.id);
        res.json({ PostId: post.id, UserId: req.user.id });
    }catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => { //DELETE /post/1/like
    try {
        const post = await Post.findOne({ where: {id: req.params.postId}});
        if(!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.')
        }
        await post.removeLikers(req.user.id);
        res.json({ PostId: post.id, UserId: req.user.id });
    }catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => { // DELETE /post/10
    try{
        await Post.destroy({
            where: { // 내가쓴 게시물 + 내 아이디
                id: req.params.postId,
                UserId: req.user.id,
            },
        });
        res.status(200).json({ PostId: parseInt(req.params.postId, 10)}); //params는 무조건 문자열
    }catch (error){
        console.error(error);
        next(error);
    }
});

module.exports = router;