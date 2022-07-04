const axios = require("axios");
const { generateConfig } = require("../../utils.js");
const CONSTANTS = require("../../constants.js");
const { google } = require("googleapis");
var Gmail = require("node-gmail-api");
var qs = require("qs");
const db = require("../models");
const Tbl_email_data = db.Tbl_email_data;
require("dotenv").config();
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

exports.getUser = async (req, res) => {
  try {
    const url = `https://gmail.googleapis.com/gmail/v1/users/${process.env.USER}/profile`;
    var config = {
      method: "get",
      url: url,
      headers: {
        Authorization: `Bearer ${process.env.ACCESSTOKEN}`,
      },
    };
    const response = await axios(config);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.getDrafts = async (req, res) => {
  try {
    const url = `https://gmail.googleapis.com/gmail/v1/users/${process.env.USER}/drafts`;
    var config = {
      method: "get",
      url: url,
      headers: {
        Authorization: `Bearer ${process.env.ACCESSTOKEN}`,
      },
    };
    const response = await axios(config);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.readMail = async (req, res) => {
  try {
    let = [];
    const url = `https://gmail.googleapis.com//gmail/v1/users/${process.env.USER}/messages`;
    var config = {
      method: "get",
      url: url,
      headers: {
        Authorization: `Bearer ${process.env.ACCESSTOKEN}`,
      },
    };
    const response = await axios(config);
    let data = await response.data;
    // res.send(data);
    console.log("data.messages.length", data.messages.length);
    if (data.messages.length > 0) {
      for (let index = 0; index < data.messages.length; index++) {
        const element = await data.messages[index];
        const check = async (id) => {
          const url1 = `https://gmail.googleapis.com//gmail/v1/users/${process.env.USER}/messages/${id}`;
          var config1 = {
            method: "get",
            url: url1,
            headers: {
              Authorization: `Bearer ${process.env.ACCESSTOKEN}`,
            },
          };
          const response1 = await axios(config1);
          let data1 = await response1.data;
          //res.send(data1);
        };
        await check(element.id);
      }
    }
  } catch (error) {
    res.send(error);
  }
};
