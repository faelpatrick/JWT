const User = require('../models/User');

const userController = {

    register: async function (req, res) {
        const useer = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        try {
            const savedUser = await User.save()
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error)
        }
    },

    login: function (req, res) {

    }
}
module.exports = userController;