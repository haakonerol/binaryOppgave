
const Melding = require('../models/meldingModel')

module.exports.melding = {

  list: async (req, res)=> {
    const data = await Melding.find()

    res.status(200).send({
      error: false,
      result: data
    })
  },
  create: async (req, res)=> {
    const data = await Melding.create(req.body)

    res.status(201).send({
      error: false,
      result: data
    })
  },
  read: async (req, res)=> {
    const data = await Melding.findOne({_id:req.params.meldingId})

    res.status(200).send({
      error: false,
      result: data
    })
  },
  update: async (req, res)=> {
    const data = await Melding.updateOne({_id: req.params.meldingId}, req.body)

    res.status(202).send({
      error: false,
      result: data,
      new: await Melding.findOne({_id:req.params.meldingId})
    })
  },
  delete: async (req, res)=> {
    const data = await Melding.deleteOne({_id: req.params.meldingId})

    if(data.deletedCount >= 1){
      res.sendStatus(204)
    }else{
      res.errorStatusCode = 404
      throw new Error('Data Not Found!')
    }
  }
}