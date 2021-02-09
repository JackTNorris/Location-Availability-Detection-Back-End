const { builtinModules } = require('module');
const client = require('./loaders/mqttClient');
const tasks = require('./services/tasks');

const begin = () => {
    console.log("Started running");
    client.on('message', (topic, room) => {
        switch(topic)
        {
            case 'room/studentEntered':
                tasks.handleStudentEntered(room);
                break;
            case 'room/studentExited':
                tasks.handleStudentExited(room);
                break;
        }
    });
}

module.exports = {begin};
