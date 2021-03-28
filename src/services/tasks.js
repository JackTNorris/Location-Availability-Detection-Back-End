const database = require('./database');

const handleLocationOccupancyUpdate = (organizationID, locationKey, occupancyCount) => {
    database.updateLocationCount(organizationID, locationKey, occupancyCount);
}

module.exports = {handleLocationOccupancyUpdate};