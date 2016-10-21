var ids = {
  github: {
    clientID: '<your-id>',
    clientSecret: '<your-secret>',
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  linkedin: {
    clientID: '<your-id>',
    clientSecret: '<your-secret>',
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
  },
  twitter: {
    consumerKey: '<your-key>',
    consumerSecret: '<your-secret>',
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  }
};

module.exports = ids;
