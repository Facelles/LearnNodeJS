import { Router } from 'express'
import { TwitService } from './twit.service.js'

const router = Router()

const twistService = new TwitService()

router.post('/', (req, res) => {
    if(req.body?.text?.length < 1){
        res.status(400).send({message: 'Text is required'})
    }
    const twit = twistService.createTwit(req.body)
    res.status(201).json(twit)
})

export const twitRouter = router