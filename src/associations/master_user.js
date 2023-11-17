const {
  MasterStore,
} = require("../models/objects/master_stores");
const {
  MasterStoreEmployees,
} = require("../models/objects/master_stores_employees");
const {
  MasterUser,
} = require("../models/user/master_user");

function MasterUserAssociations() {
  MasterUser.hasMany(MasterStore, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });
  MasterUser.hasMany(MasterStoreEmployees, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });
}

module.exports = {
  MasterUserAssociations,
};
