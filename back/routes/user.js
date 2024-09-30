const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

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
        password: req.body.password,
    });
    res.status(201).send('ok');
    } catch (error) {
        console.error(error);
        next(error); // status 500
    }
});

module.exports = router;