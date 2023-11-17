const InitAssociations = (
  MasterCategory,
  MasterFile,
  MasterStoreCatalogue,
  MasterStoreChannels,
  MasterStoreEmployees,
  MasterStore,
  MasterUser,
  MasterStoreDisplayItem
) => {
  // MASTER_USER - MASTER_STORE //
  MasterStore.belongsTo(MasterUser, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterUser.hasMany(MasterStore, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_USER - MASTER_STORE_EMPLOYEES //
  MasterStoreEmployees.belongsTo(MasterUser, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    targetKey: "id",
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

  // MASTER_STORE - MASTER_STORE_EMPLOYEES //
  MasterStoreEmployees.belongsTo(MasterStore, {
    foreignKey: {
      name: "storeId",
      allowNull: false,
    },
    targetKey: "id",
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

  // MASTER_STORE - MASTER_STORE_CATALOGUE //
  MasterStoreCatalogue.belongsTo(MasterStore, {
    foreignKey: {
      name: "storeId",
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

  // MASTER_STORE_DISPLAY_ITEM - MASTER_STORE_CATALOGUE //
  MasterStoreDisplayItem.belongsTo(MasterStoreCatalogue, {
    foreignKey: {
      name: "catalogueId",
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

  // MASTER_STORE_DISPLAY_ITEM - MASTER_CATEGORY //
  MasterStoreDisplayItem.belongsTo(MasterCategory, {
    foreignKey: {
      name: "categoryId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterCategory.hasMany(MasterStoreDisplayItem, {
    foreignKey: {
      name: "categoryId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_STORE - MASTER_FILE //
  MasterFile.belongsTo(MasterStore, {
    foreignKey: {
      name: "storeId",
      allowNull: true,
    },
    targetKey: "id",
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

  // MASTER_STORE_DISPLAY_ITEM - MASTER_FILE //
  MasterFile.belongsTo(MasterStoreDisplayItem, {
    foreignKey: {
      name: "displayItemId",
      allowNull: true,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterStoreDisplayItem.hasMany(MasterFile, {
    foreignKey: {
      name: "displayItemId",
      allowNull: true,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_STORE - MASTER_STORE_CHANNELS //
  MasterStoreChannels.belongsTo(MasterStore, {
    foreignKey: {
      name: "storeId",
      allowNull: false,
    },
    targetKey: "id",
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
};

module.exports = {
  InitAssociations,
};
