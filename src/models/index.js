const { db } = require("../config");
const {
  MASTER_COURIER_SEED,
} = require("../seeds/master_courier");
const {
  MASTER_CATEGORY_SEED,
} = require("../seeds/master_category");
const {
  MASTER_PAYMENT_METHOD_SEED,
} = require("../seeds/master_payment_method");
const { MASTER_UOM_SEED } = require("../seeds/master_uom");
const { SequelizeRollback } = require("../utils/functions");
const { InitAssociations } = require("../associations");
const {
  MasterTransaction,
} = require("../models/activity/master_transaction");
const {
  MasterActivityReport,
} = require("../models/activity/master_activity_report");
const {
  MasterCourier,
} = require("../models/objects/master_courier");
const {
  MasterCategory,
} = require("../models/objects/master_category");
const {
  MasterUOM,
} = require("../models/objects/master_uom");
const {
  MasterFile,
} = require("../models/objects/master_file");
const {
  MasterStoreCatalogue,
} = require("../models/objects/master_stores_catalogue");
const {
  MasterStoreChannels,
} = require("../models/objects/master_stores_channels");
const {
  MasterStoreRoles,
} = require("./objects/master_stores_roles");
const {
  MasterStore,
} = require("../models/objects/master_stores");
const {
  MasterUser,
} = require("../models/user/master_user");
const {
  MasterStoreDisplayItem,
} = require("../models/objects/master_stores_display_item");
const {
  MasterUserBuyAddresses,
} = require("./user/master_user_buy_addresses");
const {
  MasterTransactionDetail,
} = require("./activity/master_transaction_detail");
const {
  MasterPaymentMethod,
} = require("./objects/master_payment_method");
const { MasterAccess } = require("./user/master_access");
const {
  MasterStoreRolesAccesses,
} = require("./objects/master_stores_roles_accesses");
const {
  MasterStoreUserRoles,
} = require("./objects/master_stores_user_roles");
const {
  MASTER_ACCESS_SEED,
} = require("../seeds/master_access");
const {
  MasterStoreChannelsPermissions,
} = require("./objects/master_stores_channels_permissions");

const MigrateModels = async () => {
  const trx = await db.transaction();
  try {
    await db.sync({ alter: true, force: false });
    await Promise.all([
      MasterCourier.bulkCreate(MASTER_COURIER_SEED, {
        ignoreDuplicates: true,
        transaction: trx,
        lock: true,
      }),
      MasterCategory.bulkCreate(MASTER_CATEGORY_SEED, {
        ignoreDuplicates: true,
        transaction: trx,
        lock: true,
      }),
      MasterPaymentMethod.bulkCreate(
        MASTER_PAYMENT_METHOD_SEED,
        {
          ignoreDuplicates: true,
          transaction: trx,
          lock: true,
        }
      ),
      MasterUOM.bulkCreate(MASTER_UOM_SEED, {
        ignoreDuplicates: true,
        transaction: trx,
        lock: true,
      }),
      MasterAccess.bulkCreate(MASTER_ACCESS_SEED, {
        ignoreDuplicates: true,
        transaction: trx,
        lock: true,
      }),
    ]);

    await trx.commit();
    console.log("Model initialization completed");
    console.log(
      "All models have been synchronized successfully."
    );
    process.exit(0);
  } catch (e) {
    await SequelizeRollback(trx, e);
    console.error(e);
    process.exit(1);
  }
};

module.exports = () => {
  // initialize associations
  InitAssociations(
    MasterUOM,
    MasterCategory,
    MasterFile,
    MasterStoreCatalogue,
    MasterStoreChannels,
    MasterStoreChannelsPermissions,
    MasterStoreRoles,
    MasterStoreRolesAccesses,
    MasterStoreUserRoles,
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
  );

  // export the models here
  return {
    MigrateModels,
    MasterUOM,
    MasterCategory,
    MasterFile,
    MasterStoreCatalogue,
    MasterStoreChannels,
    MasterStoreChannelsPermissions,
    MasterStoreRoles,
    MasterStoreRolesAccesses,
    MasterStoreUserRoles,
    MasterStore,
    MasterUser,
    MasterUserBuyAddresses,
    MasterAccess,
    MasterStoreDisplayItem,
    MasterTransaction,
    MasterTransactionDetail,
    MasterActivityReport,
    MasterCourier,
    MasterPaymentMethod,
  };
};
