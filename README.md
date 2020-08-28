# BBE-Backend

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7b904473456c48659edd45132d6cea67)](https://app.codacy.com/gh/BuildForSDGCohort2/BBE-Backend?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDGCohort2/BBE-Backend&utm_campaign=Badge_Grade_Settings)

## Development

Requires: Node v8.2+, MongoDB

- [Node Installation Steps](https://nodejs.org/en/download/)
- [MongoDB Installation Steps](https://docs.mongodb.com/manual/administration/install-community/)

1. Clone this repo: `https://github.com/BuildForSDGCohort2/BBE-Backend.git`
2. Run `cd BBE-Backend && npm install`
3. Run `npm install -g pm2 nodemon`
4. In a new terminal tab, run `mongod` to start the mongo daemon (if you run into errors in this process it means your MongoDB installation likely isn't properly set up). If successful, the mongo daemon will start, leave this running.

**Build & Run the Project**

To build the project and start the server run:

`npm run localdev`

Hot reloading is enabled for development - as you make changes the code will recompile and the server will restart.

## Endpoints

Your client apps will interface with the following REST endpoints:

- GET: `/info/test`
