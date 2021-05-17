import bcrypt, { hash, hashSync } from 'bcrypt'

const users = [
    {//Only have the fields that are required
        name: 'Admin',
        email: 'admin@123.com',
        password: bcrypt.hashSync('Graypot1', 10), // we will need bcrypt to hash and encrypt passwords
        isAdmin: true,
    },
    {//Only have the fields that are required
        name: 'Derrick',
        email: 'notadmin1@123.com',
        password: bcrypt.hashSync('Graypot1', 10), // we will need bcrypt to hash and encrypt passwords
        //No need to add is admin for non admins since its set to default
    },
    {//Only have the fields that are required
        name: 'Aaron',
        email: 'notadmin3@123.com',
        password: bcrypt.hashSync('Graypot1', 10), // we will need bcrypt to hash and encrypt passwords
    },
]

export default users;