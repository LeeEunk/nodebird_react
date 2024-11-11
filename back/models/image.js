
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', { // MySQL에는 Images 테이블 생성
        // id가 기본적으로 들어있다.
        src : {
            type: DataTypes.STRING(200),
            allowNull: false, // 필수 입력 필드
        },

    }, {
        charset: 'utf8', //이모티콘 넣을려면 mb4도 넣어줘야함
        collate: 'utf8_general_ci', // 한글 저장
        sequelize,
    });
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post);
    };
    

    return Image;
}