// 중앙 관리자
// app.js에 들어가는 것들은 모두 미들웨어임 -> req, res, next 이런 모양임
// node가 서버가 아니라 node에서 제공하는 http 모듈이 서버임 
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv')
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();

const app = express();

// 실행전에 npx sequelize db:create 날려줘야함
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);
passportConfig();

// 프론트에서 백엔드에 어떤 요청이 있는지 보여줌
// if (process.env.NODE_ENV === 'production') {
//     app.use(morgan('combined'));
//     app.use(hpp());
//     app.use(helmet({ contentSecurityPolicy: false}));
//     app.options('*', cors());
//     app.use(cors({
//         origin: 'http://3.35.220.149',
//         credentials: true,
//     }));
// } else {
//     app.use(morgan('dev'));
//     app.use(cors({
//         origin: true,
//         credentials: true,
//     }));
// }

// router보다 늘 위에 있어야 함 위에서 아래로 실행되므로
// req.body 인식
app.use(cors({
    origin: ['http://localhost:3060', 'http://nodebird.com', 'http://13.209.111.65'], // * 대신 보낸 곳의 주소가 자동으로 들어가야 보안이 높아짐, 단, true로 해도 무방.
    credentials: true, // 기본값은 false임, 이게 트루면 origin을 정확한 주소로 표기해야 함, 쿠키를 전송하기 위해 설정
}));

app.use('/', express.static(path.join(__dirname, 'uploads'))) // image 백엔드 서버로 보낼때, os 차이때문에 경로의 문제가 될 수 있으므로 join을 함
app.use(express.json()) //axios로 데이터 보낼때
app.use(express.urlencoded({ extended: true })); //multi-part가 아닌 일반폼으로 데이터 보낼때
// cookie 설정 -> random한 토큰값 전달 (개인정보 해킹을 막기 위함) -> 브라우저는 누구나 값을 읽을 수 있으므로 해킹에 취약하므로
app.use(cookieParser(process.env.COOKIE_SECRET));
// 미들웨어 추가


// session 설정 -> 쿠키값과 세션값을 연결하기 위해 토큰값을 들고 있음
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true, // 클라이언트에서 쿠키를 사용할 수 없도록 설정
        secure: false,
        domain: process.env.NODE_ENV === 'production' && 'http://13.209.111.65'
    }
}));


// passport 초기화 및 세션 설정
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send('hello express')
});

app.get('/api', (req, res) => {
    res.send('hello api')
});

// 라우터 순서가 매우 중요
app.use('/posts', postsRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);

// // default로 에러처리 미들웨어가 장착되어있음 커스터마이징하려면 여기를 수정하면 됨
// app.use((err, req, res, next) => {

// });

app.listen(80, () => {
    console.log("서버 실행 중.... http://localhost:80");
});