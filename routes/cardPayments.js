const router = require("express").Router();
const makePesapalPayments = require("../controllers/pesapal");
router.post("/ipn", makePesapalPayments);
module.exports = router;