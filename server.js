import express from 'express'
import dotenv from 'dotenv'
import { twitRouter } from './src/twit/twit.controller.js'
import { authMiddleware } from './src/auth.middleware.js'

dotenv.config()

const app = express()

// app.use(authMiddleware)

async function main(){
    app.use(express.json())

    app.use('/api/twits', twitRouter)

        app.get('/error', (req, res) => {
        throw new Error('This is a test error! =-=')
    });

    app.all('*', (req, res) => {
        res.status(404).json({ message: 'Not found' })
    });

    app.use((err,req,res,next) => {
        console.error(err.stack)
        res.status(500).send('Something wrong! ')
    });

    app.listen(process.env.PORT || 4200, () => {
        console.log('Server is running on port 4200')
    })
}

main() 