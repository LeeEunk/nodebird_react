const DataTypes = require('sequelize');
const {Model} = DataTypes;

module.exports = class Comment extends Model {
    static init(sequelize) {
        return super.init({
            // id가 기본적으로 들어있다.
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            // UserId: 1
            // PostId: 3
        },{
            modelName: 'Comment',
            tableName: 'comments', // MySQL에는 자동으로 소문자에 복수형태인 comments 테이블 생성
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',  //이모티콘 넣을려면 mb4도 넣어줘야함
            sequelize, //연결객체를 넣어줘야함
        });
    }

    static associate(db) {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    }
};
