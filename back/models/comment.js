
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', { // MySQL에는 Comments 테이블 생성
        // id가 기본적으로 들어있다.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

    }, {
        charset: 'utf8mb4', //이모티콘 넣을려면 mb4도 넣어줘야함
        collate: 'utf8mb4_general_ci', // 한글 저장
    });
    Comment.associate = (db) => {
        // UserId : 1, 5, 8 누구의 소유자인지
        // PostId
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    

    return Comment;
}