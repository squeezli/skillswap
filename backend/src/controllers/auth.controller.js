const User = require("../models/users.models")
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

        if (!email || !password) {
            return res.status(400).json({ error: 'Email и/или пароль не заполнены' })
        }

        await User.findOne({ where: { email: email } }).then(async user => {

            // const isPasswordValid = await bcrypt.compare(password, user.password)
            if(!user.password == password) {
                return res.status(400).json({ error: 'Email и/или пароль не совпадают' })
            }

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

            return res.json({ token: token })
                

        }).catch((err) => {
            console.log(err)
            return res.status(500).json({ error: 'Ошибка сервера' })
        })

    }

}

module.exports = new AuthController()