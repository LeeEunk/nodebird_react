const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post } = require('../models');

const router = express.Router();


router.post('/login', (req, res, next) => { // 미들웨어 확장
    passport.authenticate('local', (err, user, info) => {
        if(err) {
            // server error 발생 시
            console.error(err);
            return next(err);
        }
        if(info) {
            // 401 : 허가되지 않음 (보통 로그인할 때 사용함)
            // 403: 금지
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if(loginErr){
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: { exclude: ['password']},
                include: [{
                    model: Post,
                }, {
                    model: User,
                    as: 'Followings',
                },{
                    model: User,
                    as: 'Followers',
                }]
            })
            // res.setHeader('Cookie', 'cxlhy')
            return res.status(200).json(fullUserWithoutPassword);
        });
})(req, res, next)
});

// 테이블 안에 data를 넣음
router.post('/', async(req, res, next)=> { //POST /user/
    try {
        const exUser = await User.findOne({
        // 중복체크
        // 조건
        where : {
            email: req.body.email,
        }
    });
    if (exUser) {
        return res.status(403).send('이미 사용중인 아이디입니다.');
    }

    // 암호화된 비밀번호로 인코딩
    // 숫자는 10-13 사이 -> 높을수록 보안이 세짐, 대신 시간이 소요됨
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
        email: req.body.email,
        nickname: req.body.nickname,
        password: hashedPassword,
    });
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060');
    res.status(201).send('ok');
    } catch (error) {
        console.error(error);
        next(error); // status 500
    }
});

router.post('/logout' , (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

module.exports = router;