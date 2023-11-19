const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");
const { ACTIVE } = require("../../variables/general");

const MasterTransactionDetail = db.define(
  "MasterTransactionDetail",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    buyDealPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    buyQty: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    expeditionCost: {
      allowNull: false,
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    subTotal: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    buyingNote: {
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
    tableName: "master_transaction_detail",
  }
);

module.exports = { MasterTransactionDetail };
