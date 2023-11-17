const { db } = require("../config");
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
const { InitAssociations } = require("./associations");

const InitModels = async () => {
  InitAssociations();
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
