// import module for use throughout the class
const {TwitterApi} = require('twitter-api-v2');
const CronJob = require("cron").CronJob;
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
const tweet = async () => {
    client.v2.tweet({ 
        text: 'Hello, world!',
        for_super_followers_only: false
    });
}

// tweet poll
const tweetPoll = async () => {
    client.v2.tweet({
        text: "Tweeting with polls!",
        for_super_followers_only: false,
        poll: { "options": [ "yes", "maybe", "no" ], "duration_minutes": 120 }
    });
}

// update name
const accountName = async () => {
    client.v1.updateAccountProfile({ name: '🤖' });
}

// update account description
const accountDescription = async () => {
    client.v1.updateAccountProfile({ description: 'This is an automated account' });
}

// update account location
const accountLocation = async () => {
    client.v1.updateAccountProfile({ location: 'New York, USA' });
}

// update account URL
const accountURL = async () => {
    client.v1.updateAccountProfile({ url: 'https://twitter.com' });
}

// update account profile image
const profileImage = async () => {
    client.v1.updateAccountProfileImage("./image.png", {
        width: 400,
        height: 400,
        offset_left: 0,
        offset_right: 0
    });
}

// update account banner image
const bannerImage = async () => {
    client.v1.updateAccountProfileBanner("./banner.png", {
        width: 1500,
        height: 500,
        offset_left: 0,
        offset_right: 0
    });
}

////////////////////////// ┌─────────────────── second (optional 0 - 59)
////////////////////////// | ┌───────────────── minute (0 - 59)
////////////////////////// | | ┌──────────── hour (0 - 23)
////////////////////////// | | | ┌────────── day of month (1 - 31)
////////////////////////// | | | | ┌──────── month (1 - 12)
////////////////////////// | | | | | ┌────── day of week (0 - 7, 0 or 7 are sunday)
////////////////////////// | | | | | |
////////////////////////// | | | | | |
////////////////////////// * * * * * *
const timer = new CronJob('0 8 * * * *', async () => {
    try {
        tweet();
        // tweetPoll();
        // accountName();
        // accountDescription();
        // accountLocation();
        // accountURL();
        // profileImage();
        // bannerImage();
    } catch (e) {
        console.log(e);
    }
},
    // onComplete, startNow, timeZone
    null, true, 'America/New_York'
);
