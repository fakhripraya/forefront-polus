const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  DB_ACTIVITY_REPORT_STATUS,
  DB_ACTIVITY_REPORT_TYPE,
} = require("../../variables/enum");
const { NEW_REPORT } = require("../../variables/general");

const MasterActivityReport = db.define(
  "MasterActivityReport",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    reportCode: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    reportType: {
      allowNull: false,
      type: DataTypes.ENUM(DB_ACTIVITY_REPORT_TYPE),
    },
    reportTitle: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    reportDescription: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    reportDecision: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    reportResult: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    reportNote: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM(DB_ACTIVITY_REPORT_STATUS),
      defaultValue: NEW_REPORT,
    },
  },
  {
    indexes: [{ unique: true, fields: ["reportCode"] }],
    paranoid: true,
    deletedAt: "destroyTime",
    tableName: "master_activity_report",
  }
);

module.exports = { MasterActivityReport };
