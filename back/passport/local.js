const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = () => {
    passport.use(new LocalStrategy({
        //req body에 대한 설정
        usernameField: 'email',
        passwordField: 'password',
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({
                where : { email }
            });
            // passport에서는 응답을 보내주진 않는다.
            // 서버에러, 성공여부, 클라이언트 에러 순서임
            if( !user) {
                return done(null, false, { reason: '존재하지 않는 이메일입니다.'})
            }
            // 사용자가 입력한 비밀번호와 db에 있는 비밀번호를 비교한다.
            const result = await bcrypt.compare(password, user.password);
            if(result) {
                return done(null, user);
            }
            return done(null, false, { reason: '비밀번호가 틀렸습니다.'}); 
        } catch (error) {
            console.error(error);
            return done(error);
        }
        
    }));
}