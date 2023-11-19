const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  EMPLOYEE,
  ACTIVE,
} = require("../../variables/general");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");

const MasterStoreEmployees = db.define(
  "MasterStoreEmployees",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    employeeRoles: {
      allowNull: false,
      type: DataTypes.JSON,
      defaultValue: `[${EMPLOYEE}]`,
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
    tableName: "master_store_employees",
  }
);

module.exports = { MasterStoreEmployees };
