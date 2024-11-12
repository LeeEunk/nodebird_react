const DataTypes = require('sequelize');
const {Model} = DataTypes;

module.exports = class Hashtag extends Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        }, {
            modelName : 'Hashtag',
            tableName: 'hashtags',
            charset: 'utf8mb4', //이모티콘 넣을려면 mb4도 넣어줘야함
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize,
        });        
    }
    
    static associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    }
};