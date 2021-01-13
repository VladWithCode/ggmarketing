const { google } = require('googleapis');

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '986857537702-conma70oa5t7rqctnjm13g12d93q168s.apps.googleusercontent.com';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'hR7epi1cWjFPTD1YtjCLBHLS';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN || '1//04GBp3x8aNnjbCgYIARAAGAQSNwF-L9IrRCndXdL1TghT58wBKe3c0Hx2kkSxYsEHsYjOiLLUP2G8QaWwW0gThcsOVBSiLBoB_Gs';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

module.exports = {
  oAuth2Client,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  REFRESH_TOKEN
};
