const mqqtConfig = require('../config/mqtt.json');
const mqtt = require('mqtt');
const client = mqtt.connect(mqqtConfig['broker-url']);

client.on('connect', () => {
    client.subscribe('gnegTest');
    /*
    for(let event of mqqtConfig.events)
    {
        client.subscribe(event);
    }
    */
})

module.exports = client;
