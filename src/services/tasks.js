const database = require('./database');
const handleStudentEntered = (location) => {
    database.incrementLocationCount(location);
}

const handleStudentExited = (location) => {
    database.decrementLocationCount(location);
}

module.exports = {handleStudentEntered, handleStudentExited};