const firebaseDB = require('../loaders/firebaseDB');

const updateLocationCount = (locationName, organizationID, occupancyCount) => {
    firebaseDB.ref(`/locations/${organizationID}`).once('value').then(async (snapshot) => {
        for(let key in snapshot.val())
        {
            if(snapshot.val()[key]['name'] == locationName)
            {
                await firebaseDB.ref(`/locations/${organizationID}/${key}`).update({occupancy: occupancyCount});
            }
        }
    })
}
/*
const getLocationCount = async (locationName, organizationID) => {
    mysqlconnection.createQuery(
        `select * from locations where name='${locationName}' and organizationID='${organizationID}`,
        (err, result, fields) => {
            console.log(result);
        }
    );
}
*/

module.exports = {updateLocationCount};