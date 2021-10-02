// const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// const sequelize = new Sequelize(
//   process.env.MYSQL_DB,
//   process.env.MYSQL_USER,
//   process.env.MYSQL_PASSWORD,
//   {
//     dialect: 'mysql',
//     host: 'localhost',
//     // port: parseInt(process.env.MYSQL_PORT)
//   }
// );


// const Sequelize = require('sequelize');
// // Option 1: Passing parameters separately
// const sequelize = new Sequelize('blog', 'root', 'congresso2020', {
//   host: 'localhost',
//   dialect: 'mysql'
// });



// module.exports = sequelize;

module.exports = {
  development: {
    dialect: process.env.MYSQL_DIALECT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
  }}