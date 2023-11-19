const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");
const { ACTIVE } = require("../../variables/general");

const MasterCategory = db.define(
  "MasterCategory",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    categoryName: {
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
    indexes: [{ unique: true, fields: ["categoryName"] }],
    paranoid: true,
    deletedAt: "destroyTime",
    tableName: "master_category",
  }
);

module.exports = { MasterCategory };
