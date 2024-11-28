const express = require('express');
const { Post, Image, User, Comment } = require('../models');
const router = express.Router();
const {Op} = require('sequelize');

router.get('/', async(req, res, next) => { // GET /posts -> 복수개의 게시물 조회, 1개만 가져오는거와는 구분
    try{
        const where = {};
        //querystring
        if(parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐때 ->  더 많은 게시물을 불러와야하는 상황 (페이지네이션)
            where.id = {[Op.lt] : parseInt(req.query.lastId, 10)} //보다 작은
        }
        const posts = await Post.findAll({
            // where: { id: lastId },
            where,
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
                }],
            },{
                model: User, // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            },{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                },{
                    model:Image,
                }]
            }],
        });
        console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/related', async(req, res, next) => { // follow한 게시물만 보기
    try{
        const followings = await User.findAll({
            attributes:['id'],
            include:[{
                model: User,
                as: 'Followers',
                where: { id: req.user.id }
            }]
        });
        const where = {
            UserId: { [Op.in]: followings.map((v) => v.id)}
        };
        if(parseInt(req.query.lastId, 10)) { 
            where.id = {[Op.lt] : parseInt(req.query.lastId, 10)}
        }
        const posts = await Post.findAll({
            where,
            limit: 10, 
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
                }],
            },{
                model: User, // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            },{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                },{
                    model:Image,
                }]
            }],
        });
        console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/unrelated', async(req, res, next) => { // GET /posts -> 복수개의 게시물 조회, 1개만 가져오는거와는 구분
    try{
        const followings = await User.findAll({
            attributes:['id'],
            include:[{
                model: User,
                as: 'Followers',
                where: { id: req.user.id }
            }]
        })
        const where = {
            UserId: { [Op.notIn]: followings.map((v) => v.id)}
        };
        if(parseInt(req.query.lastId, 10)) { 
            where.id = {[Op.lt] : parseInt(req.query.lastId, 10)}
        }
        const posts = await Post.findAll({
            where,
            limit: 10, 
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
                }],
            },{
                model: User, // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            },{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                },{
                    model:Image,
                }]
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