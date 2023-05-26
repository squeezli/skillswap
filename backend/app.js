const express = require('express')
const app = express()

const dotenv = require('dotenv')
const router = require('./router/main.router.js')

dotenv.config()
app.use(express.json({ extended: true }))

app.use('/api', router)

const PORT = process.env.APP_PORT

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

start()