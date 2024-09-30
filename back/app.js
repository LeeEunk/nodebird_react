// node가 서버가 아니라 node에서 제공하는 http 모듈이 서버임 
const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const app = express();
// const dotenv = require('dotenv');

// dotenv.config();

// 실행전에 npx sequelize db:create 날려줘야함
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

// router보다 늘 위에 있어야 함 위에서 아래로 실행되므로
// req.body 인식
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello express')
});

app.get('/api', (req, res) => {
    res.send('hello api')
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log("서버 실행 중");
});