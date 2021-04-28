const Parse = require('parse/node');

module.exports = {
    initializeParse(){
        Parse.initialize('ID','JAVASCRIPT');
        Parse.serverURL = "https://parseapi.back4app.com/";
        Parse.masterKey = "MASTER";
        return Parse;
    },
    UserClass: Parse.Object.extend("User"),
    GameScoreClass: Parse.Object.extend("GameScore"),
}
