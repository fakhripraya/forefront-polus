const { db } = require("../config");
const {
  MASTER_COURIER_SEED,
} = require("../seeds/master_courier");
const {
  MASTER_CATEGORY_SEED,
} = require("../seeds/master_category");
const {
  MasterTransaction,
} = require("../models/activity/master_transaction");
const {
  MasterTransactionDetail,
} = require("../models/activity/master_transaction_detail");
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

const { SequelizeRollback } = require("../utils/functions");
const { InitAssociations } = require("../associations");

const MigrateModels = async () => {
  await db
    .sync({ alter: true, force: false })
    .then(() => {
      console.log(
        "All models has been synchronized successfully."
      );
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(async () => {
      const trx = await db.transaction();
      try {
        await MasterCourier.bulkCreate(
          MASTER_COURIER_SEED,
          {
            ignoreDuplicates: true,
            transaction: trx,
            lock: true,
          }
        );

        await MasterCategory.bulkCreate(
          MASTER_CATEGORY_SEED,
          {
            ignoreDuplicates: true,
            transaction: trx,
            lock: true,
          }
        );

        trx.commit();
        console.log("Model initialization completed");
      } catch (e) {
        await SequelizeRollback(trx, e);
      }
    });
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
    MasterStoreDisplayItem
  );

  // export the models here
  return {
    MigrateModels,
    MasterTransaction,
    MasterTransactionDetail,
    MasterCourier,
    MasterCategory,
    MasterFile,
    MasterStoreCatalogue,
    MasterStoreChannels,
    MasterStoreEmployees,
    MasterStore,
    MasterUser,
    MasterStoreDisplayItem,
  };
};
