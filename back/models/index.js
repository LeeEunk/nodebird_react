const Sequelize = require('sequelize');
const comment = require('./comment');
const hashtag = require('./hashtag');
const image = require('./image');
const post = require('./post');
const user = require('./user');
const report = require('./report');

const env = process.env.NODE_ENV || 'development'; // 기본값 development
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// db.Comment = require('./comment')(sequelize, Sequelize);
db.Comment = comment;
db.Hashtag = hashtag;
db.Image = image;
db.Post = post;
db.User = user;
db.Report = report;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});


// 모델 간 관계 설정
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
