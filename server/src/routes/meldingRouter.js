
const router = require('express').Router()

const {melding} = require('../controllers/meldingController')

router.route('/')
    .get(melding.list)
    .post(melding.create)

router.route('/:meldingId')
    .get(melding.read)  
    .put(melding.update)
    .patch(melding.update) 
    .delete(melding.delete) 

module.exports = router
