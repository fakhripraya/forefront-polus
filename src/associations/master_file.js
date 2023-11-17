const {
  MasterFile,
} = require("../models/objects/master_file");
const {
  MasterStore,
} = require("../models/objects/master_stores");
const {
  MasterStoreDisplayItem,
} = require("../models/objects/master_stores_display_item");

function MasterFileAssociations() {
  MasterFile.belongsTo(MasterStoreDisplayItem, {
    foreignKey: {
      name: "displayItemId",
      allowNull: true,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterFile.belongsTo(MasterStore, {
    foreignKey: {
      name: "storeId",
      allowNull: true,
    },
    targetKey: "id",
    constraints: false,
  });
}

module.exports = {
  MasterFileAssociations,
};
