const { User } = require('../models');

const userData = [{
        username: 'Slim',
        password: 'shady'

    },
    {
        username: 'Mike',
        password: 'jones'
    },
    {
        username: 'Jun',
        password: 'seba'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers; 