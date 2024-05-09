const DB_DEFAULT_COLUMN_STATUS = [
  "ACTIVE",
  "NON_ACTIVE",
  "DELETED",
];

const DB_ACTIVITY_REPORT_STATUS = [
  "NEW_REPORT",
  "IN_PROGRESS",
  "WAITING_FOR_APPROVAL",
  "REPORT_SOLVED",
  "REPORT_CANCELED",
];

const DB_TRANSACTION_STATUS = [
  "PENDING_PAYMENT",
  "READY_TO_SHIP",
  "ON_SHIPMENT",
  "RETURN_REQUEST",
  "ON_RETURN",
  "TRANSACTION_COMPLETE",
  "TRANSACTION_CANCELED",
];

const DB_ACTIVITY_REPORT_TYPE = [
  "REPORT_USER",
  "REPORT_STORE",
  "REPORT_SHIPMENT_RETURN",
];

const DB_TRANSACTION_TYPE = [
  "B2C_TRANSACTION",
  "FUND_TRANSFER",
  "FUND_LIQUIDATION",
];

const DB_ACCESS_TYPE = [
  "GENERAL_ACCESS",
  "STORE_GENERAL_ACCESS",
  "DASHBOARD_ACCESS",
  "CREATIVE_STORE_ACCESS",
];

const DB_CREATIVE_STORE_MEMBERSHIP_STATUS = [
  "FREE_TIER",
  "TIER_1",
  "TIER_2",
];

module.exports = {
  DB_CREATIVE_STORE_MEMBERSHIP_STATUS,
  DB_DEFAULT_COLUMN_STATUS,
  DB_ACTIVITY_REPORT_STATUS,
  DB_TRANSACTION_STATUS,
  DB_ACTIVITY_REPORT_TYPE,
  DB_TRANSACTION_TYPE,
  DB_ACCESS_TYPE,
};
