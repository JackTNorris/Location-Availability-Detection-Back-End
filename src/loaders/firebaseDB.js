const firebase = require('firebase');
const { builtinModules } = require('module');
const firebaseConfig = require('../config/firebase.json');
firebase.default.initializeApp(firebaseConfig);

module.exports = firebase.default.database();