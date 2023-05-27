const express = require('express')
const app = express()

const { sequelize } = require('./src/utils/db.connect')
const dotenv = require('dotenv')
const router = require('./src/router/main.routes')

const passport = require('passport')

require('./src/middleware/auth.middleware')(passport)



//models for sequelize.sync()
const User = require('./src/models/users.models')
const UserProfile = require('./src/models/usersProfiles.models')
const UserSkill = require('./src/models/usersSkills.models')

dotenv.config()

//parser for json
app.use(express.json({ extended: true }))


app.use('/api', router)

const PORT = process.env.APP_PORT

async function start() {
    try {
        //start server
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
        passport.initialize()
        passport.authenticate()
        //connection to db
        await sequelize.authenticate()
            .then(() => {
                console.log('Подключение к базе данных установлено');
            })
            .catch((error) => {
                console.error('Ошибка подключения к базе данных:', error);
            });

        //create tables 
        // await sequelize.sync({ force: true })
        //     .then(() => {
        //         console.log('Таблицы созданы');
        //     })
        //     .catch((error) => {
        //         console.error('Ошибка создания таблиц:', error);
        //     });
        //     User.create({
        //         firstName: 'John',
        //         lastName: 'Doe',
        //         email: 'johndoe@example.com',
        //         password: 'password123',
        //       })
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

start()