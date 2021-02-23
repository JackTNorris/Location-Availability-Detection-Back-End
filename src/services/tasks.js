const database = require('./database');

const handleLocationOccupancyUpdate = (locationName, organizationID, occupancyCount) => {
    database.updateLocationCount(locationName, organizationID, occupancyCount);
}

module.exports = {handleLocationOccupancyUpdate};