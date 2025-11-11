const { mongoose } = require('../configs/dbConnection')

const MeldingSchema = new mongoose.Schema(
  {
    binary: {
      type: String,
      trim: true,
      required: true,
    },
    melding: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: 'meldinger',
    timestamps: true,
  }
)

module.exports = mongoose.model('Melding', MeldingSchema)
