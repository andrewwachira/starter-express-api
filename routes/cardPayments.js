const router = require("express").Router();
const makePesapalPayments = require("../controllers/pesapal");
router.post("/", makePesapalPayments);
module.exports = router;