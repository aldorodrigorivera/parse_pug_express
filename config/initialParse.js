const Parse = require('parse/node');

module.exports = {
    initializeParse(){
        Parse.initialize('kU7rMeE8oYGPJJPixUBBFWNIikXJpMip6VjnaAuT','iIgzaF9z8J2pjiUQTremh7Utrayvc5LJgnxYoT7q');
        Parse.serverURL = "https://parseapi.back4app.com/";
        Parse.masterKey = "CCNgxRdknduiXI2T26FjwiE70RyJsVV5eueQBfM0";
        return Parse;
    },
    UserClass: Parse.Object.extend("User"),
    GameScoreClass: Parse.Object.extend("GameScore"),
}