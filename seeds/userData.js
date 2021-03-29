const {User}= require('../models');
const userData = [
    {
        "id": 1,
        "name": "Bob Smith",
        "email": "aguy@dude.com",
        "password": "$2b$10$zEU91pJsLcQjQPJpBqFMtui2jM4YUq0sYlES4g9VuguagPFh4I3Aq"
        // password: password 

},
    {
        "id": 2,
        "name": "Judy Smith",
        "email": "alady@women.com",
        "password": "$2b$10$zEU91pJsLcQjQPJpBqFMtui2jM4YUq0sYlES4g9VuguagPFh4I3Aq"
        // password: password 

}

]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;