module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("tbl_email_data", {
        msg_id: {
        type: Sequelize.STRING,
        autoIncrement: true,
        primaryKey: true,
      },
      msg_subject: {
        type: Sequelize.STRING,
        unique: true
      },
      msg_from: {
        type: Sequelize.STRING,
      },
      msg_to : {
        type: Sequelize.STRING,
      },
      msg_body: {
        type: Sequelize.TEXT,
      },
      msg_date : {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
    });
    return Users;
  };
  