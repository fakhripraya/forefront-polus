const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");
const { ACTIVE } = require("../../variables/general");

const MasterStoreDisplayItem = db.define(
  "MasterStoreDisplayItem",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    productCode: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    productName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    productDescription: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    productHashtag: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    productCondition: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    productWeight: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    productWeightUnit: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    productPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    productSKU: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    productStocks: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    productSafetyStocks: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    productRating: {
      allowNull: false,
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
        max: 5,
      },
    },
    availableCourierList: {
      allowNull: false,
      type: DataTypes.JSON,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM(DB_DEFAULT_COLUMN_STATUS),
      defaultValue: ACTIVE,
    },
  },
  {
    indexes: [{ unique: true, fields: ["productCode"] }],
    paranoid: true,
    deletedAt: "destroyTime",
    tableName: "master_store_display_item",
  }
);

module.exports = { MasterStoreDisplayItem };
