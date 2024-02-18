const InitAssociations = (
  MasterUOM,
  MasterCategory,
  MasterFile,
  MasterStoreCatalogue,
  MasterStoreChannels,
  MasterStoreRoles,
  MasterStoreRolesAccesses,
  MasterStore,
  MasterUser,
  MasterUserBuyAddresses,
  MasterAccess,
  MasterStoreDisplayItem,
  MasterTransaction,
  MasterTransactionDetail,
  MasterActivityReport,
  MasterCourier,
  MasterPaymentMethod
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

  // MASTER_ACCESS - MASTER_STORE_ROLES_ACCESSES //
  MasterStoreRolesAccesses.belongsTo(MasterAccess, {
    foreignKey: {
      name: "accessId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterAccess.hasMany(MasterStoreRolesAccesses, {
    foreignKey: {
      name: "accessId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_STORE_ROLES - MASTER_STORE_ROLES_ACCESSES //
  MasterStoreRolesAccesses.belongsTo(MasterStoreRoles, {
    foreignKey: {
      name: "storeRoleId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterStoreRoles.hasMany(MasterStoreRolesAccesses, {
    foreignKey: {
      name: "storeRoleId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_USER - MASTER_STORE_ROLES //
  MasterStoreRoles.belongsTo(MasterUser, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterUser.hasMany(MasterStoreRoles, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_STORE - MASTER_STORE_ROLES //
  MasterStoreRoles.belongsTo(MasterStore, {
    foreignKey: {
      name: "storeId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterStore.hasMany(MasterStoreRoles, {
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

  // MASTER_STORE_DISPLAY_ITEM - MASTER_UOM //
  MasterStoreDisplayItem.belongsTo(MasterUOM, {
    foreignKey: {
      name: "uomId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterUOM.hasMany(MasterStoreDisplayItem, {
    foreignKey: {
      name: "uomId",
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

  // MASTER_USER - MASTER_USER_BUY_ADDRESSES //
  MasterUserBuyAddresses.belongsTo(MasterUser, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterUser.hasMany(MasterUserBuyAddresses, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_TRANSACTION - MASTER_TRANSACTION_DETAIL //
  MasterTransactionDetail.belongsTo(MasterTransaction, {
    foreignKey: {
      name: "trxId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterTransaction.hasMany(MasterTransactionDetail, {
    foreignKey: {
      name: "trxId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_TRANSACTION_DETAIL - MASTER_STORE_DISPLAY_ITEM //
  MasterTransactionDetail.belongsTo(
    MasterStoreDisplayItem,
    {
      foreignKey: {
        name: "displayItemId",
        allowNull: false,
      },
      targetKey: "id",
      constraints: false,
    }
  );
  MasterStoreDisplayItem.hasMany(MasterTransactionDetail, {
    foreignKey: {
      name: "displayItemId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_ACTIVITY_REPORT - MASTER_TRANSACTION //
  MasterActivityReport.belongsTo(MasterTransaction, {
    foreignKey: {
      name: "trxId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterTransaction.hasOne(MasterActivityReport, {
    foreignKey: {
      name: "trxId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_ACTIVITY_REPORT - MASTER_USER //
  MasterActivityReport.belongsTo(MasterUser, {
    foreignKey: {
      name: "reporterId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterUser.hasMany(MasterActivityReport, {
    foreignKey: {
      name: "reporterId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_TRANSACTION_DETAIL - MASTER_COURIER //
  MasterTransactionDetail.belongsTo(MasterCourier, {
    foreignKey: {
      name: "courierId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterCourier.hasMany(MasterTransactionDetail, {
    foreignKey: {
      name: "courierId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });

  // MASTER_TRANSACTION - MASTER_PAYMENT_METHOD //
  MasterTransaction.belongsTo(MasterPaymentMethod, {
    foreignKey: {
      name: "paymentMethodId",
      allowNull: false,
    },
    targetKey: "id",
    constraints: false,
  });
  MasterPaymentMethod.hasMany(MasterTransaction, {
    foreignKey: {
      name: "paymentMethodId",
      allowNull: false,
    },
    sourceKey: "id",
    constraints: false,
  });
};

module.exports = {
  InitAssociations,
};
