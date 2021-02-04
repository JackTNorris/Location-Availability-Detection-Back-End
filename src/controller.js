import client from './loaders/mqttClient';
import * as tasks from './services/tasks';

export const start = () => {
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
