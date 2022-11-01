// import module for use throughout the class
const {TwitterApi} = require('twitter-api-v2');
require('dotenv').config();

// create a new Twitter API object
const twitter = new TwitterApi({

    appKey: process.env.appKey,
    appSecret: process.env.appSecret,
    accessToken: process.env.accessToken,
    accessSecret: process.env.accessSecret,

});

// establish a Twitter client with read/write capabilities
const client = twitter.readWrite;

// tweet
client.v2.tweet({ text: 'Hello, world!' });

// update name
client.v1.updateAccountProfile({ name: '🤖' });

// update account description
client.v1.updateAccountProfile({ description: 'This is an automated account' });

// update account location
client.v1.updateAccountProfile({ location: 'New York, USA' });

// update account URL
client.v1.updateAccountProfile({ url: 'https://twitter.com' });

// update account profile image
client.v1.updateAccountProfileImage("./image.png", {

    width: 400,
    height: 400

});

// update account banner image
client.v1.updateAccountProfileBanner("./banner.png", {

    width: 1500,
    height: 500

});
