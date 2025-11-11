const mongoose = require('mongoose')

const dbConnection = () => {
  mongoose
    .connect(process.env?.MONGODB || 'mongodb://localhost:27017/binaryAPI')
    .then(() => console.log(' DB Connected'))
    .catch(() => console.log(' DB Not Connected! '))
}

module.exports = { mongoose, dbConnection }
