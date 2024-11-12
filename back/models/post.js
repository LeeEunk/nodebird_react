const DataTypes = require('sequelize');
const {Model} = DataTypes;

module.exports = class Post extends Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            // RetweetId
        }, {
            modelName: 'Post',
            tableName:'posts',
            charset: 'utf8mb4', //이모티콘 넣을려면 mb4도 넣어줘야함
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize,
        });
    }
        
    static associate = (db) => {
        // 게시물은 작성자에 속해져있다.
        db.Post.belongsTo(db.User); // 게시글 작성자 //post.addUser, post.getUser, post.setUser
        //테이블이 하나 더 생김(PostHashtag라는 중간테이블이 생성됨)
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // 해시태그에 여러개의 게시물이 있을 수 있으므로, N:N 다대다 관계임  //post.addHashtags
        db.Post.hasMany(db.Comment); //post.addComments, post.getComments
        db.Post.hasMany(db.Image); // post.addImages, post.getImages
        // 나중에 as에 따라서 post.getLikers처럼 게시글 좋아요 누른 사람을 가져오게 됨
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // 게시물 좋아요 누른 사람 // post.addLikers, post.removeLikers
        db.Post.belongsTo(db.Post, {as: 'Retweet'}); // PostId -> RetweetID로 변경됨 //post.addRetweet
         
    };
}