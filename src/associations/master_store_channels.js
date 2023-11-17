const {
  MasterStore,
} = require("../models/objects/master_stores");
const {
  MasterStoreChannels,
} = require("../models/objects/master_stores_channels");

function MasterStoreChannelsAssociations() {
  MasterStoreChannels.belongsTo(MasterStore, {
    foreignKey: {
      name: "storeId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
}

module.exports = {
  MasterStoreChannelsAssociations,
};
