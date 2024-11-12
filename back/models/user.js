const DataTypes = require('sequelize');
const { Model } = DataTypes;


module.exports = class User extends Model {
    static init(sequelize) {
        return super.init({
            email: {
                type: DataTypes.STRING(30), //STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
                allowNull: false, // 필수
                unique: true, // 고유한 값
            },
            nickname: {
                type: DataTypes.STRING(30),
                allowNull: false, //필수
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false, //필수
            },
    
        }, {
            modelName: 'User',
            tableName:'users',
            charset: 'utf8',
            collate: 'utf8_general_ci', // 한글 저장
            sequelize,
        });
    }
       
    static associate (db) {
        //어떠한 관계들이 있는지 잘따져야함. 관계형 db 사용 이유
        //user 와 post는 1:N 관계 한명이 여러개의 게시물을 작성할 수 있음
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        // 좋아요 관계
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' } ); // through를 통해서 중간 테이블 이름을 변경함
        // user라는 같은 테이블 내이기 때문에 외래키적용
        // 같은 컬럼을 구분하는 데에 쓰임
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers', foreignKey: 'FollowingId'});
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
    };
}