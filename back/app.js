// 중앙 관리자
// app.js에 들어가는 것들은 모두 미들웨어임 -> req, res, next 이런 모양임
// node가 서버가 아니라 node에서 제공하는 http 모듈이 서버임 
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const db = require('./models');
const app = express();
const passportConfig = require('./passport');
const passport = require('passport');


dotenv.config();
// 실행전에 npx sequelize db:create 날려줘야함
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);
passportConfig();

// router보다 늘 위에 있어야 함 위에서 아래로 실행되므로
// req.body 인식
app.use(cors({
    origin: 'http://localhost:3060', // * 대신 보낸 곳의 주소가 자동으로 들어가야 보안이 높아짐, 단, true로 해도 무방.
    credentials: true, // 기본값은 false임, 이게 트루면 origin을 정확한 주소로 표기해야 함
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// cookie 설정 -> random한 토큰값 전달 (개인정보 해킹을 막기 위함) -> 브라우저는 누구나 값을 읽을 수 있으므로 해킹에 취약하므로
app.use(cookieParser(process.env.COOKIE_SECRET));
// session 설정 -> 쿠키값과 세션값을 연결하기 위해 토큰값을 들고 있음
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
// 미들웨어 추가
app.use(passport.initialize());
app.use(passport.session())

app.get('/', (req, res) => {
    res.send('hello express')
});

app.get('/api', (req, res) => {
    res.send('hello api')
});

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

// // default로 에러처리 미들웨어가 장착되어있음 커스터마이징하려면 여기를 수정하면 됨
// app.use((err, req, res, next) => {

// });

app.listen(3065, () => {
    console.log("서버 실행 중");
});