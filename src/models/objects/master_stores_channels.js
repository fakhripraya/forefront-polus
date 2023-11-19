const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  USER,
  ADMIN,
  ACTIVE,
} = require("../../variables/general");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");

const MasterStoreChannels = db.define(
  "MasterStoreChannels",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    settingsJSON: {
      allowNull: true,
      type: DataTypes.JSON,
    },
    allowedRoles: {
      allowNull: false,
      type: DataTypes.JSON,
      defaultValue: `[${(USER, ADMIN)}]`,
    },
    channelsOrder: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    channelsJSON: {
      allowNull: true,
      type: DataTypes.JSON,
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
    tableName: "master_store_channels",
  }
);

module.exports = { MasterStoreChannels };
