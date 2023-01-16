const express = require('express')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require("./config/db.js");
const cors  = require("cors");

connectDB();
app.use(cors());
app.use(express.json());
app.use("/ipn",require("./routes/cardPayments"));
app.use("/safCallback",require("./routes/mobileMoneyPayments"));
app.get("/",(req,res)=>{
    res.send("Heellooo there")
})
app.listen(process.env.PORT || 5000);