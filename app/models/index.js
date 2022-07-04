const dbConfig = require("../../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false,
    freezeTableName: true
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Tbl_email_data = require("./Tbl_email_data.js")(sequelize, Sequelize);
db.sequelize.sync({force:false})
.then(()=>{
  console.log("yes re sync done")
})
module.exports = db;