const {
  MasterStore,
} = require("../models/objects/master_stores");
const {
  MasterStoreEmployees,
} = require("../models/objects/master_stores_employees");
const {
  MasterUser,
} = require("../models/user/master_user");
const {
  MasterStoreChannels,
} = require("../models/objects/master_stores_channels");
const {
  MasterFile,
} = require("../models/objects/master_file");
const {
  MasterStoreCatalogue,
} = require("../models/objects/master_stores_catalogue");

function MasterStoreAssociations() {
  MasterStore.belongsTo(MasterUser, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterStore.hasMany(MasterStoreCatalogue, {
    foreignKey: {
      name: "storeId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });
  MasterStore.hasMany(MasterFile, {
    foreignKey: {
      name: "storeId",
      allowNull: true,
    },
    sourceKey: "id",
    constraints: false,
  });
  MasterStore.hasMany(MasterStoreEmployees, {
    foreignKey: {
      name: "storeId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });
  MasterStore.hasMany(MasterStoreChannels, {
    foreignKey: {
      name: "storeId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });
}

module.exports = {
  MasterStoreAssociations,
};
