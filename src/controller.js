const { builtinModules } = require('module');
const client = require('./loaders/mqttClient');
const tasks = require('./services/tasks');

const begin = () => {
    console.log("Started server");
    client.on('message', (topic, roomData) => {
        let jsonData = JSON.parse(roomData.toString());
        switch(topic)
        {
            case 'room/occupancyUpdate':
                tasks.handleLocationOccupancyUpdate(jsonData.organization, jsonData.key, jsonData.occupancy);
                break;
            case 'gnegTest':
                console.log("RECIEVED MESSAGE FROM ESP32");
                console.log(roomData.toString());
                tasks.handleLocationOccupancyUpdate(jsonData.organization, jsonData.key, jsonData.occupancy);
                break;
        }
    });
}

module.exports = {begin};
