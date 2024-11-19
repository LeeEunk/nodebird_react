// node는 webpack을 안쓰기 때문에 import, export를 사용하지 않음
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const { Post, Image, Comment, User, Hashtag } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try {
    fs.accessSync('uploads');
    } catch(error) {
        console.log('uploads 폴더가 없으므로 생성합니다.');
        fs.mkdirSync('uploads');
    }

    AWS.config.update({
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        region: 'ap-northeast-2',
      });
      const upload = multer({
        storage: multerS3({
          s3: new AWS.S3(),
          bucket: 'node-bird',
          key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
          }
        }),
        limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
      });

// const upload = multer({
//         storage: multer.diskStorage({ // 하드disk에 저장
//             destination(req, file, done) { 
//                 done(null, 'uploads'); //upload라는 폴더에 저장
//             },
//             filename(req, file, done) {
//                 const ext = path.extname(file.originalname); // 중복이름을 위해 날짜에 시간 초까지 적용 -> 확장자 추출
//                 const basename = path.basename(file.originalname, ext); // 파일명 추출
//                 done(null, basename + '_' + new Date().getTime() + ext); //파일명 저장, 나중에 s3에 저장할건데 scale out되면 이미지까지 복사되므로 불필요한 메모리를 차지됨
//             },
//         }),
//         limits: { fileSize: 20* 1024* 1024 }, // 20MB 로 제한 -> 서버 공격이 될 수 있으므로 -> 나중에 프론트에서 클라우드로 바로 올릴수있는형식이 성능적으로 좋음
//     });

router.post('/', isLoggedIn, upload.none(), async (req, res, next ) => { // POST /post
    try {
        const hashtags = req.body.content.match(/#[^\s#]+/g);
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
    });
    if (hashtags) {
        // slice는 # 제거, findOrCreate는 중복 제거
       const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({ 
        where :  {name: tag.slice(1).toLowerCase()},
     }))); // [[노드, true]] [[리액트, true]]
     await post.addHashtags(result.map((v) => v[0]));
    }
    if (req.body.image) {
        if (Array.isArray(req.body.image)) { // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
          const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
          await post.addImages(images);
        } else { // 이미지를 하나만 올리면 image: eunkk.png
          const image = await Image.create({ src: req.body.image });
          await post.addImages(image);
        }
      }
      const fullPost = await Post.findOne({
        where: { id: post.id },
        include: [{
          model: Image,
        }, {
          model: Comment,
          include: [{
            model: User, // 댓글 작성자
            attributes: ['id', 'nickname'],
          }],
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
        res.status(500).send('Internal Server Error');
        next(error);
    }
});


//array(여러개), single(한개), none(텍스트), fills(인풋창이 여러개일때)
//multer는 app.js 장착하기보단 router마다 장착함 -> 폼마다 다르게 적용되기 때문
// 파일 업로드 후 이미지 데이터 저장
router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => { // POST /post/images
    console.log(req.files);
    res.json(req.files.map((v) => v.location));
  });
  
router.get('/:postId', async (req, res, next) => {
    try {
      const post = await Post.findOne({
        where: { id: req.params.postId },
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
            order: [['createdAt', 'DESC']],
          }],
        }, {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        }],
      });
      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

router.post('/:postId/retweet', isLoggedIn, async (req, res, next ) => { // POST /post/1/retweet
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
            include: [{
                model: Post,
                as: 'Retweet',
            }],
        });
        if (!post) {
            return res.status(403).send('존재하지 않는 게시글입니다.');
        }
       // 자기 게시물 리트윗 + 자기 게시물을 리트윗한 다른 게시물을 다시 재 리트윗 막기
       if( req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
            return res.status(403).send('자신의 글을 리트윗할 수 없습니다.');
       }
       // 남의 게시물을 리트윗해서 다시 리트윗을 막기위함
       const retweetTargetId = post.RetweetId || post.id;
       const exPost = await Post.findOne({
        where : {
            UserId: req.user.id,
            RetweetId: retweetTargetId,
        },
       });
       if (exPost) {
            return res.status(403).send('이미 리트윗했습니다.');
       }
       const retweet = await Post.create({
        UserId: req.user.id,
        RetweetId: retweetTargetId,
        content: 'retweet',
       });
       const retweetWithPrevPost = await Post.findOne({
        where: {id: retweet.id},
        include: [{
            model: Post,
            as: 'Retweet',
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            },{
                model:Image,
            }]
        },{
            model: User,
            attributes: ['id', 'nickname'],
        },{
            model: User,
            as: 'Likers', //좋아요 누른 사람
            attributes: ['id', 'nickname'],
        },{
            model: Image,
        },{
            model: Comment,
            include:[{
                model: User,
                attributes: ['id', 'nickname']
            }],
        }],
       })
        res.status(201).json(retweetWithPrevPost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});


router.post('/:postId/comment', isLoggedIn, async (req, res, next ) => { // POST /post/1/comment
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

router.patch('/:postId', isLoggedIn, async (req, res, next) => { // PATCH /post/10
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    try {
      await Post.update({
        content: req.body.content
      }, {
        where: {
          id: req.params.postId,
          UserId: req.user.id,
        },
      });
      const post = await Post.findOne({ where: { id: req.params.postId }});
      if (hashtags) {
        const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
          where: { name: tag.slice(1).toLowerCase() },
        }))); // [[노드, true], [리액트, true]]
        await post.setHashTags(result.map((v) => v[0]));
      }
      res.status(200).json({ PostId: parseInt(req.params.postId, 10), content: req.body.content });
    } catch (error) {
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