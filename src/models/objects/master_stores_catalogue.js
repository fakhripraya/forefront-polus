const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");
const { ACTIVE } = require("../../variables/general");

const MasterStoreCatalogue = db.define(
  "MasterStoreCatalogue",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    catalogueCode: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    catalogueName: {
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
    indexes: [
      { unique: true, fields: ["catalogueCode"] },
      { unique: true, fields: ["catalogueName"] },
    ],
    paranoid: true,
    deletedAt: "destroyTime",
    tableName: "master_store_catalogue",
  }
);

module.exports = { MasterStoreCatalogue };
