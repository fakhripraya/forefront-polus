const {
  MasterStore,
} = require("../models/objects/master_stores");
const {
  MasterStoreDisplayItem,
} = require("../models/objects/master_stores_display_item");
const {
  MasterStoreCatalogue,
} = require("../models/objects/master_stores_catalogue");

function MasterStoreCatalogueAssociations() {
  MasterStoreCatalogue.belongsTo(MasterStore, {
    foreignKey: {
      name: "storeId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterStoreCatalogue.hasMany(MasterStoreDisplayItem, {
    foreignKey: {
      name: "catalogueId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });
}

module.exports = {
  MasterStoreCatalogueAssociations,
};
