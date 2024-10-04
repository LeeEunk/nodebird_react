// login 라이브러리
const passport = require('passport');
const local = require('./local');
const { User } = require('../models');
 
module.exports = () => {
    // session에 다들고 있긴 무거우니깐 id 값만 가지고 있음
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // login을 성공하고 나서 DB를 통해서 사용자 정보를 복구함
    passport.deserializeUser( async (id, done) => {
        try {
            const user = await User.findOne({ where: { id }});
            done(null, user); //req.user에 넣어줌
        } catch (error) {
            console.error(error);
            done(error);
        }
    });

    local();
};