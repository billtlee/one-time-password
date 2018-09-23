const twilio = require('twilio');
const Constants = require('./constants');

const accountSid = Constants.ACCOUNTSID;
const authToken = Constants.AUTHTOKEN;

module.exports = new twilio.Twilio(accountSid, authToken);
