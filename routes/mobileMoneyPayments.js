const router = require("express").Router();
const makeMpesaPayments = require("../controllers/mpesa")
router.route("/").post(makeMpesaPayments);
module.exports = router;