# Node.js Twitter Bot
This guide will show you how to set up the basic functionalities of a Twitter automated account using ```node-js``` — You will need a Twitter account and API keys for this guide. Some possible use-cases for creating a Twitter automated account are to automatically tweet links to new social posts, to automatically tweet about world events as they happen, or to automatically interact with tweets from your favorite creator.

> **Warning**
> Twitter could possibly block the account associated with the bot. This would be catastrophic, so it is imperative that you take action to create a new Twitter account prior to creating a Twitter automated account and following this guide.

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://mit-license.org/)
[![language](https://img.shields.io/badge/language-JavaScript-forestgreen.svg)](https://nodejs.org)

## Installation
To get started, download following [repository](https://github.com/juuswtf/twitter-bot/example) and ensure that it is installed properly. This will help setup the basic files required to begin.
```
git clone https://github.com/juuswtf/twitter-bot/example.git
```

## API Keys

Locate the file ".env" in the root of your project. This file stores local configuration variables that we can access. Open the file ".env" and paste your API keys in the corresponding locations. Be sure to replace the values with __your__ API keys.

```
appKey = ************************
appSecret = ************************
accessToken = ************************
accessSecret = ************************
```

## Dependencies

Before we configure the bot, we need to install its dependencies. In your terminal, enter the following:

```
$ npm install cron --save
$ npm install dotenv --save
$ npm install twitter-api-v2 --save
```

This will install all the dependencies required, below is an example of how the dependencies should appear within the package.json file after we've installed them:

```json
"dependencies": {
  "cron": "^2.1.0",
  "dotenv": "^16.0.3",
  "twitter-api-v2": "^1.12.8"
}
```

## Example Functions
The Twitter API functionalities included in this guide are listed below. For a more comprehensive breakdown of all the Twitter API functions, please view the [Twitter API Documents](https://developer.twitter.com/en/docs/twitter-api).

- Post text tweet: [Example Tweet](https://twitter.com/elonmusk/status/1519480761749016577)
- Post tweet for Super Followers only — to learn more about Super Followers visit the [Twitter Help Center](https://help.twitter.com/en/using-twitter/super-follows)
- Post tweet containing a poll: [Example Poll](https://twitter.com/elonmusk/status/1555951580339372032)
- Update account banner & profile image(s)
- Update account name, description, location, and URL

Here is a preview of some of the example functions included with this installation. These functions can be useful for setting up the basic features of your automated account:

```js
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

// ...
```

> **Note**
> functions last upated on: __2022-11-01__

Feel free to adjust these functions to better suit your needs. You can browse the [Twitter API Docs](https://developer.twitter.com/en/docs/twitter-api) to learn how to accomplish more complex tasks with the other functions that exist. 

## Extras

#### Automated Account Label
- To toggle the visibility of the <samp>```automated```</samp> account label navigate to <samp>```twitter > settings > account > account information > automation```</samp> — additional details on automated account labels can be found at the [Twitter Help Center](https://help.twitter.com/en/using-twitter/automated-account-labels).

#### Rate Limits
- View a detailed and comprehensive breakdown of the rate limits for Twitter's API endpoints [v1.1](https://developer.twitter.com/en/docs/twitter-api/v1/rate-limits) and [v2](https://developer.twitter.com/en/docs/twitter-api/rate-limits).

<details>

  <summary>Other API limits</summary>

<!-- TOC -->

#### Character Limits
- Tweet <samp>```280 chars```</samp>
- Profile name <samp>```50 chars```</samp>
- Profile description <samp>```160 chars```</samp>
- Profile location <samp>```30 chars```</samp>
- Profile URL <samp>```100 chars```</samp>

#### Image Sizes
- Profile picture <samp>`400x400px`</samp>
- Account banner <samp>`1500x500px`</samp>
- 4K Image <samp>`4096x4096px`</samp>
- [Video](https://help.twitter.com/en/using-twitter/twitter-blue-labs) <samp>`1920x1080px`</samp>
- GIF <samp>`15MB`</samp>

<!-- /TOC -->

</details>

<sub>MIT License — A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.</sub>
