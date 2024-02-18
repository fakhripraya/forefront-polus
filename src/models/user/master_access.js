const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  ACTIVE,
  GENERAL_ACCESS,
} = require("../../variables/general");
const {
  DB_DEFAULT_COLUMN_STATUS,
  DB_ACCESS_TYPE,
} = require("../../variables/enum");

const MasterAccess = db.define(
  "MasterAccess",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    accessType: {
      allowNull: false,
      type: DataTypes.ENUM(DB_ACCESS_TYPE),
      defaultValue: GENERAL_ACCESS,
    },
    accessName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM(DB_DEFAULT_COLUMN_STATUS),
      defaultValue: ACTIVE,
    },
  },
  {
    paranoid: true,
    deletedAt: "destroyTime",
    tableName: "master_access",
  }
);

module.exports = { MasterAccess };
