const database = require('./database');
const handleStudentEntered = (location) => {
    console.log("Student Entered");
    //database.incrementLocationCount(location);
}

const handleStudentExited = (location) => {
    console.log("Student left");
    //database.decrementLocationCount(location);
}

module.exports = {handleStudentEntered, handleStudentExited};