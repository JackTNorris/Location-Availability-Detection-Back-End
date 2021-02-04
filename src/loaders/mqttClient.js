const mqtt = require('mqtt');
const client = mqtt.connect('');

client.on('connect', () => {
    client.subscribe('room/studentEntered');
    client.subscribe('room/studentExited');
})

module.exports = client;
