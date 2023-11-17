const {
  MasterStore,
} = require("../models/objects/master_stores");
const {
  MasterStoreEmployees,
} = require("../models/objects/master_stores_employees");
const {
  MasterUser,
} = require("../models/user/master_user");

function MasterStoreEmployeesAssociations() {
  MasterStoreEmployees.belongsTo(MasterUser, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterStoreEmployees.belongsTo(MasterStore, {
    foreignKey: {
      name: "storeId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
}

module.exports = {
  MasterStoreEmployeesAssociations,
};
