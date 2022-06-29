
module.exports = app => {
const controllers=require('../controller/mail.controller');
const express = require('express');
const router = express.Router();
router.get('/mail/user',controllers.getUser)
router.get('/mail/drafts', controllers.getDrafts);
router.get('/mail/read', controllers.readMail);
app.use('/api', router);
}