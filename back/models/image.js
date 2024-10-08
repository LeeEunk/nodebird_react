
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', { // MySQL에는 Images 테이블 생성
        // id가 기본적으로 들어있다.
        content: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },

    }, {
        charset: 'utf8mb4', //이모티콘 넣을려면 mb4도 넣어줘야함
        collate: 'utf8mb4_general_ci', // 한글 저장
    });
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post);
    };
    

    return Image;
}