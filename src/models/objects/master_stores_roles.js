const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const { ACTIVE } = require("../../variables/general");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");

const MasterStoreRoles = db.define(
  "MasterStoreRoles",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    roleName: {
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
    tableName: "master_store_roles",
  }
);

module.exports = { MasterStoreRoles };
