const { User } = require('../models');

const userData = [
    {
        username: "Mark_vin",
        github: "Markvin",
        email: "",
        password: "password01"
    },
    {
        username: "Fern_51",
        github: "fjimenez51",
        email: "fernando.jimenez51@yahoo.com",
        password: "password02"
    },
    {
        username: "enriquematt2",
        github: "mattenrique2",
        email: "crossario@gmail.com",
        password: "password03"
    },
    {
        username: "john doe",
        github: "Jdoe212",
        email: "Johndoe212@gmail.com",
        password: "password04"
    }
    
    
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;