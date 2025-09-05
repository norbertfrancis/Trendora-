const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User')


const registerUser = async(req, res) => {
    const {userName, email, password} = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            userName,
            email,
            password: hashPassword,
        });

        await newUser.save();
        res.status(200).json({
            success: true,
            message: "Registration successfull",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Some error occured",
        });
    }
};

const loginUser = async(req, res) => {
     
}

module.exports = {registerUser}