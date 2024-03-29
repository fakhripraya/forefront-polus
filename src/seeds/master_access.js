const {
  ADMINISTRATOR,
  VIEW_HOME,
  VIEW_PURCHASE_ORDER,
  VIEW_PINNED,
  VIEW_CATALOGUES,
  ADD_CATALOGUE,
  ADD_STORE,
  VIEW_CHANNEL,
  SEND_MESSAGES,
  ABSOLUTE,
  STORE_OWNER,
  STORE_ADMINISTRATOR,
} = require("../variables/accesses");
const {
  ACTIVE,
  GENERAL_ACCESS,
  CREATIVE_STORE_ACCESS,
  DASHBOARD_ACCESS,
  STORE_GENERAL_ACCESS,
} = require("../variables/general");

const MASTER_ACCESS_SEED = [
  // GENERAL_ACCESS
  {
    accessType: GENERAL_ACCESS,
    accessName: ABSOLUTE,
    status: ACTIVE,
  },
  {
    accessType: GENERAL_ACCESS,
    accessName: ADMINISTRATOR,
    status: ACTIVE,
  },

  // STORE_GENERAL_ACCESS
  {
    accessType: STORE_GENERAL_ACCESS,
    accessName: STORE_OWNER,
    status: ACTIVE,
  },
  {
    accessType: STORE_GENERAL_ACCESS,
    accessName: STORE_ADMINISTRATOR,
    status: ACTIVE,
  },

  // DASHBOARD_ACCESS
  {
    accessType: DASHBOARD_ACCESS,
    accessName: VIEW_HOME,
    status: ACTIVE,
  },
  {
    accessType: DASHBOARD_ACCESS,
    accessName: VIEW_PURCHASE_ORDER,
    status: ACTIVE,
  },
  {
    accessType: DASHBOARD_ACCESS,
    accessName: VIEW_PINNED,
    status: ACTIVE,
  },
  {
    accessType: DASHBOARD_ACCESS,
    accessName: VIEW_CATALOGUES,
    status: ACTIVE,
  },
  {
    accessType: DASHBOARD_ACCESS,
    accessName: ADD_CATALOGUE,
    status: ACTIVE,
  },
  {
    accessType: DASHBOARD_ACCESS,
    accessName: ADD_STORE,
    status: ACTIVE,
  },

  // CREATIVE_STORE_ACCESS
  {
    accessType: CREATIVE_STORE_ACCESS,
    accessName: VIEW_CHANNEL,
    status: ACTIVE,
  },
  {
    accessType: CREATIVE_STORE_ACCESS,
    accessName: SEND_MESSAGES,
    status: ACTIVE,
  },
];

module.exports = {
  MASTER_ACCESS_SEED,
};
