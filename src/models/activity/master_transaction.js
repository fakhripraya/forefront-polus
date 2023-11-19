const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  DB_TRANSACTION_STATUS,
  DB_TRANSACTION_TYPE,
} = require("../../variables/enum");
const {
  PENDING_PAYMENT,
} = require("../../variables/general");

const MasterTransaction = db.define(
  "MasterTransaction",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    transactionType: {
      allowNull: false,
      type: DataTypes.ENUM(DB_TRANSACTION_TYPE),
    },
    transactionCode: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalAmount: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    paymentAmount: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM(DB_TRANSACTION_STATUS),
      defaultValue: PENDING_PAYMENT,
    },
  },
  {
    indexes: [
      { unique: true, fields: ["transactionCode"] },
    ],
    paranoid: true,
    deletedAt: "destroyTime",
    tableName: "master_transaction",
  }
);

module.exports = { MasterTransaction };
