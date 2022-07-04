const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
var corsOptions = {
  origin: "http://localhost:800"
};
app.use(cors(corsOptions));
db.sequelize.sync();
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
require("./app/routes/mail.routes")(app);
app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT, process.env.ACCESSTOKEN);
});
app.get("/", async (req, res) => {
  // const result=await sendMail();
  res.send("Welcome to Gmail API with NodeJS"); 
});