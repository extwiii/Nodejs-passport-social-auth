# Nodejs-passport-social-auth

This repository serves as an example of a basic Node.js application which is using Passport as the authentication middleware for authenticating against social networks configured Mongo backend
Steps to run the app

    After cloning the repo, install the dependencies by running npm install
    To start the server, run npm start on the base directory

Perquisites

The server assumes that you have a local mongo instance running. This means if you have mongo installed locally, all you need to do is configure the db.js file correctly and run the mongod daemon

Also don't forget to add your secret IDs and secret keys to  server/_config.js 

```js
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

```

Difficulty :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon::new_moon:

### Bilal Cagiran  | [E-Mail](mailto:bcagiran@hotmail.com) | [Github](https://github.com/extwiii/) | [LinkedIn](https://linkedin.com/in/bilalcagiran) | [CodePen](http://codepen.io/extwiii/) | [Blog/Site](http://bilalcagiran.com) | [FreeCodeCamp](https://www.freecodecamp.com/extwiii) 

