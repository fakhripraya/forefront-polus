const { db } = require("../config");
const {
  MasterStoreAssociations,
} = require("../associations/master_store");
const {
  MasterStoreCatalogueAssociations,
} = require("../associations/master_store_catalogue");
const {
  MasterStoreChannelsAssociations,
} = require("../associations/master_store_channels");
const {
  MasterStoreDisplayItemAssociations,
} = require("../associations/master_store_display_item");
const {
  MasterStoreEmployeesAssociations,
} = require("../associations/master_store_employees");
const {
  MasterUserAssociations,
} = require("../associations/master_user");
const {
  MasterCategoryAssociations,
} = require("../associations/master_category");
const {
  MasterFileAssociations,
} = require("../associations/master_file");
const {
  MASTER_COURIER_SEED,
} = require("../seeds/master_courier");
const {
  MASTER_CATEGORY_SEED,
} = require("../seeds/master_category");
const {
  MasterCourier,
} = require("../models/objects/master_courier");
const {
  MasterCategory,
} = require("../models/objects/master_category");
const { SequelizeRollback } = require("../utils/functions");

const InitModels = async () => {
  // init associations
  MasterCategoryAssociations();
  MasterFileAssociations();
  MasterStoreCatalogueAssociations();
  MasterStoreChannelsAssociations();
  MasterStoreDisplayItemAssociations();
  MasterStoreEmployeesAssociations();
  MasterStoreAssociations();
  MasterUserAssociations();

  // sync db
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

module.exports = { InitModels };
