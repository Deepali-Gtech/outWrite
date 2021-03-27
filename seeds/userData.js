const {User}= require('../models');
const userData = [
    {
        "id": 1,
        "name": "Bob Smith",
        "email": "aguy@dude.com",
        "password": "wafflefries"

},
    {
        "id": 2,
        "name": "Judy Smith",
        "email": "alady@women.com",
        "password": "cheezeburger"

}

]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;