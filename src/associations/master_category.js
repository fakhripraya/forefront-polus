const {
  MasterCategory,
} = require("../models/objects/master_category");
const {
  MasterStoreDisplayItem,
} = require("../models/objects/master_stores_display_item");

function MasterCategoryAssociations() {
  MasterCategory.hasMany(MasterStoreDisplayItem, {
    foreignKey: {
      name: "categoryId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });
}

module.exports = {
  MasterCategoryAssociations,
};
