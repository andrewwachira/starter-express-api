const router = require("express").Router();
const makeMpesaPayments = require("../controllers/mpesa");
router.post("/safCallback", makeMpesaPayments);
module.exports = router;