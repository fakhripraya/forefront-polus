const { ACTIVE } = require("../variables/general");

const MASTER_PAYMENT_METHOD_SEED = [
  {
    paymentMethodName: "BCA",
    status: ACTIVE,
  },
  {
    paymentMethodName: "MANDIRI",
    status: ACTIVE,
  },
  {
    paymentMethodName: "GOPAY",
    status: ACTIVE,
  },
  {
    paymentMethodName: "SHOPEEPAY",
    status: ACTIVE,
  },
];

module.exports = {
  MASTER_PAYMENT_METHOD_SEED,
};
