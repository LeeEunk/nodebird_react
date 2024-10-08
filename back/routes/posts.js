const express = require('express');
const { Post, Image, User, Comment } = require('../models');
const router = express.Router();

router.get('/', async(req, res, next) => { // GET /posts -> 복수개의 게시물 조회, 1개만 가져오는거와는 구분
    try{
        const posts = await Post.findAll({
            // where: { id: lastId },
            limit: 10, //10개씩만 가져와라
            //offset: 0, // 0~10번 게시물 가져와라 10이면 11~20번 게시물 가져와라 -> 단, 중간에 게시물 추가,삭제하면 꼬일수 있으므로 추천 X
            order: [
                ['createdAt', 'DESC'], //최신글부터
                [Comment, 'createdAt', 'DESC'], // 댓글도 최신순으로
            ], 
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }]
            },{
                model: User, // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            }],
        });
        console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;