const mqqtConfig = require('../config/mqtt.json');
const mqtt = require('mqtt');
const client = mqtt.connect(mqqtConfig['broker-url']);

client.on('connect', () => {
    client.subscribe('room/studentEntered');
    client.subscribe('room/studentExited');
})

module.exports = client;
