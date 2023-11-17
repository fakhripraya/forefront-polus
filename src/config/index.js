const {
  DBSequelize,
  sequelizeSessionStore,
} = require("./sequelize");

module.exports = {
  db: DBSequelize,
  sessionStore: sequelizeSessionStore,
};
