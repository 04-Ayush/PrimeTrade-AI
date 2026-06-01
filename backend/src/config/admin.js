const bcrypt = require('bcryptjs');
const User = require('../models/User');


const seedAdmin = async () => {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    const name = process.env.ADMIN_NAME || 'Admin User';

    if (!email || !password) {
        console.log('Admin seed skipped: ADMIN_EMAIL or ADMIN_PASSWORD missing');
        return;
    }

    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
        console.log('Admin user already exists');
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
        name,
        email,
        password: hashedPassword,
        role: 'admin'
    });

    console.log('Admin user created');
};

module.exports = seedAdmin;