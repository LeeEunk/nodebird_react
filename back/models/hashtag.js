const DataTypes = require('sequelize');
const {Model} = DataTypes;

module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', { // MySQL에는 Hashtags 테이블 생성
        // id가 기본적으로 들어있다.
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },

    }, {
        charset: 'utf8mb4', //이모티콘 넣을려면 mb4도 넣어줘야함
        collate: 'utf8mb4_general_ci', // 한글 저장
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    };
    

    return Hashtag;
}