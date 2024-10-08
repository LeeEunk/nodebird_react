exports.isLoggedIn = (req, res, next) => { 
    if(req.isAuthenticated()) {
        next(); // 안에 에러 표시가 없다면 다음 미들웨어로 넘어감
    } else {
        res.status(401).send('로그인이 필요합니다.');
    }
}

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
    }
}

// 중복제거를 위함