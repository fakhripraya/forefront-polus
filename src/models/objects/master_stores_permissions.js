const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const { ACTIVE } = require("../../variables/general");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");

const MasterStoresPermissions = db.define(
  "MasterStoresPermissions",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    permitted: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
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
    tableName: "master_store_permissions",
  }
);

module.exports = { MasterStoresPermissions };
