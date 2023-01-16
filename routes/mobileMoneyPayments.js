const router = require("express").Router();
const makeMpesaPayments = require("../controllers/mpesa");
router.post("/ipn", makeMpesaPayments);
module.exports = router;