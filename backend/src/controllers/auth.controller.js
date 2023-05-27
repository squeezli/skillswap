const User = require("../models/users.models")
const UserProfile = require("../models/usersProfiles.models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

class AuthController {

    async register(req, res) {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Email и/или пароль не заполнены' })
        }



        User.findOne({ where: { email: email } }).then(async user => {
            if (user) {
                console.log(user)
                return res.status(400).json({ error: 'Email уже используется' })
            }
            // const hashPassword = bcrypt.hash(password, 7)
            // console.log(hashPassword)
            const newUser = new User({
                email,
                password
            })

            newUser.save().then((user) => {
                const newUserProfile = new UserProfile({description:null, profilePicture:null, userId:user.id})
                newUserProfile.save().then((userProdile) => {})
                const token = jwt.sign({ id: user.id, name: 'dsad' }, process.env.JWT_SECRET, { expiresIn: '1h' })
                return res.json({ token: token })
            }).catch((err) => {
                console.log(err)
                return res.status(500).json({ error: 'Ошибка сервера' })
            })
        })
            .catch((err) => {
                console.log(err)
                return res.status(500).json({ error: 'Ошибка сервера' })
            })
    }

    async login(req, res) {

        const { email, password } = req.body

        // console.log(req.body)

        if (!email || !password) {
            return res.status(400).json({ error: 'Email и/или пароль не заполнены' })
        }

        await User.findOne({ where: { email: email } }).then(user => {
            if (!user) {

                return res.status(400).json({ error: 'Email и/или пароль не совпадают' })
            }
            // const isPasswordValid = await bcrypt.compare(password, user.password)
            console.log(user)
            // console.log(password)

            if (user.password != password) {
                return res.status(400).json({ error: 'Email и/или пароль не совпадают' })
            }

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

            return res.json({ token: token })


        }).catch((err) => {
            console.log(err)
            return res.status(400).json({ error: 'Email и/или пароль не совпадают' })

            // return res.status(500).json({ error: 'Ошибка сервера' })
        })

    }

}

module.exports = new AuthController()