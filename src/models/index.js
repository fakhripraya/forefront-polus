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
  MasterFile,
} = require("../models/objects/master_file");
const {
  MasterStoreCatalogue,
} = require("../models/objects/master_stores_catalogue");
const {
  MasterStoreChannels,
} = require("../models/objects/master_stores_channels");
const {
  MasterStoreEmployees,
} = require("../models/objects/master_stores_employees");
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

const MigrateModels = async () => {
  try {
    await db.sync({ alter: true, force: false });

    const trx = await db.transaction();

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
    MasterCategory,
    MasterFile,
    MasterStoreCatalogue,
    MasterStoreChannels,
    MasterStoreEmployees,
    MasterStore,
    MasterUser,
    MasterUserBuyAddresses,
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
    MasterCategory,
    MasterFile,
    MasterStoreCatalogue,
    MasterStoreChannels,
    MasterStoreEmployees,
    MasterStore,
    MasterUser,
    MasterUserBuyAddresses,
    MasterStoreDisplayItem,
    MasterTransaction,
    MasterTransactionDetail,
    MasterActivityReport,
    MasterCourier,
    MasterPaymentMethod,
  };
};
