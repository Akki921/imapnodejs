const express = require("express");

require("dotenv").config();
const app = express();
require("./app/routes/mail.routes")(app);
app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT, process.env.ACCESSTOKEN);
});
app.get("/", async (req, res) => {
  // const result=await sendMail();
  res.send("Welcome to Gmail API with NodeJS");
});