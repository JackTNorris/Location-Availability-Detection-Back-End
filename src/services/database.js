const mysqlconnection = require('../loaders/mysql'); 
const incrementLocationCount = async (location) => {
    mysqlconnection.createQuery();
}

const decrementLocationCount = async (location) => {
    mysqlconnection.createQuery();
}

module.exports = {incrementLocationCount, decrementLocationCount};