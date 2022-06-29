const axios = require("axios");
const { generateConfig } = require("../../utils.js");
const CONSTANTS = require("../../constants.js");
const { google } = require("googleapis");

require("dotenv").config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

exports.getUser = async (req, res) => {
  try {
    const url = `https://gmail.googleapis.com/gmail/v1/users/funds2000@gmail.com/profile`;
    var config = {
      method: "get",
      url: url,
      headers: {
        Authorization:  `Bearer ${process.env.ACCESSTOKEN}`,
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
    const url = `https://gmail.googleapis.com/gmail/v1/users/funds2000@gmail.com/drafts`;
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
    const url = `https://gmail.googleapis.com//gmail/v1/users/funds2000@gmail.com/messages/17f21cfc30b20eec`;
    var config = {
        method: "get",
        url: url,
        headers: {
          Authorization: `Bearer ${process.env.ACCESSTOKEN}`,
        },
      };
      const response = await axios(config)

    let data = await response.data;

    res.json(data);
  } catch (error) {
    res.send(error);
  }
};
