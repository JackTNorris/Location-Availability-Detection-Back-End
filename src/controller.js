const { builtinModules } = require('module');
const client = require('./loaders/mqttClient');
const tasks = require('./services/tasks');

const begin = () => {
    console.log("Started server");
    client.on('message', (topic, roomData) => {
        roomData = JSON.parse(roomData);
        switch(topic)
        {
            case 'room/occupancyUpdate':
                tasks.handleLocationOccupancyUpdate(roomData.name, roomData.organization, roomData.occupancy);
                break;
        }
    });
}

module.exports = {begin};
