const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");
const { ACTIVE } = require("../../variables/general");

const MasterUOM = db.define(
  "MasterUOM",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    uom: {
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
    indexes: [{ unique: true, fields: ["uom"] }],
    paranoid: true,
    deletedAt: "destroyTime",
    tableName: "master_uom",
  }
);

module.exports = { MasterUOM };
