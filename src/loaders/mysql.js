const { builtinModules } = require('module');
const mysql = require('mysql');
const mysqlconfig = require('../config/mysql.json');
const connection = mysql.createConnection(mysqlconfig.configCredentials);

module.exports = connection;