const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const {
  ACTIVE,
  FREE_TIER,
} = require("../../variables/general");
const {
  DB_DEFAULT_COLUMN_STATUS,
  DB_CREATIVE_STORE_MEMBERSHIP_STATUS,
} = require("../../variables/enum");

const MasterStoreMembers = db.define(
  "MasterStoreMembers",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    membershipConfig: {
      allowNull: true,
      type: DataTypes.JSON,
    },
    membershipStatus: {
      allowNull: false,
      type: DataTypes.ENUM(
        DB_CREATIVE_STORE_MEMBERSHIP_STATUS
      ),
      defaultValue: FREE_TIER,
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
    tableName: "master_store_members",
  }
);

module.exports = { MasterStoreMembers };
