const axios = require('axios');

// Make a request for a user with a given ID

async function getInfoMail () {
    try {
const mail = await axios.get('http://localhost:3000/Contact');
return res.json(mail.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}
getInfoMail();
module.exports={getInfoMail};