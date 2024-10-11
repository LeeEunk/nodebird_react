// node는 webpack을 안쓰기 때문에 import, export를 사용하지 않음
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post, Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try {
fs.accessSync('uploads');
} catch(error) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}

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

const upload = multer({
    storage: multer.diskStorage({ // 하드disk에 저장
        destination(req, file, done) { 
            done(null, 'uploads'); //upload라는 폴더에 저장
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); // 중복이름을 위해 날짜에 시간 초까지 적용 -> 확장자 추출
            const basename = path.basename(file.originalname, ext); // 파일명 추출
            done(null, basename + '_' + new Date().getTime() + ext); //파일명 저장, 나중에 s3에 저장할건데 scale out되면 이미지까지 복사되므로 불필요한 메모리를 차지됨
        },
    }),
    limits: { fileSize: 20* 1024* 1024 }, // 20MB 로 제한 -> 서버 공격이 될 수 있으므로 -> 나중에 프론트에서 클라우드로 바로 올릴수있는형식이 성능적으로 좋음
});

//array(여러개), single(한개), none(텍스트), fills(인풋창이 여러개일때)
router.post('/images', isLoggedIn, upload.array('image'),  (req,res,next) => { //POST /post.images

    //multer는 app.js 장착하기보단 router마다 장착함 -> 폼마다 다르게 적용되기 때문
    console.log(req.files);
    res.json(req.files.map((v) => v.filename));
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