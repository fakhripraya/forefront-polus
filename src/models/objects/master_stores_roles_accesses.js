const { DataTypes, UUIDV4 } = require("sequelize");
const { db } = require("../../config");
const { ACTIVE } = require("../../variables/general");
const {
  DB_DEFAULT_COLUMN_STATUS,
} = require("../../variables/enum");

const MasterStoreRolesAccesses = db.define(
  "MasterStoreRolesAccesses",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM(DB_DEFAULT_COLUMN_STATUS),
      defaultValue: ACTIVE,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["accessId", "storeRoleId"],
      },
    ],
    paranoid: true,
    deletedAt: "destroyTime",
    tableName: "master_store_roles_accesses",
  }
);

module.exports = { MasterStoreRolesAccesses };
