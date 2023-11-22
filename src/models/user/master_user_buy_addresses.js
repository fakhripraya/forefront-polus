const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");
const { ACTIVE } = require("../../variables/general");

const MasterUserBuyAddresses = db.define(
  "MasterUserBuyAddresses",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    addressLabel: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    addressDetail: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    addressPhoneNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    addressCourierNote: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    addressLatitude: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    addressLongitude: {
      allowNull: true,
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
    tableName: "master_user_buy_addresses",
  }
);

module.exports = { MasterUserBuyAddresses };
