//Const admin
const admin = require("firebase-admin");
//admin.initializeApp
admin.initializeApp();

//Const
const { addMessage } = require("./api/addMessage");
//Exports function
exports.addMessage = addMessage;
