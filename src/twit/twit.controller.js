import { Router } from 'express'
import { TwitService } from './twit.service.js'
import { authMiddleware } from '../auth.middleware.js'

const router = Router()

const twistService = new TwitService()

router.post('/', authMiddleware ,(req, res) => {
    // console.log(req.headers)
    if(req.body?.text?.length < 1){
        res.status(400).send({message: 'Text is required'})
    }
    const twit = twistService.createTwit(req.body)
    res.status(201).json(twit)
})

export const twitRouter = router