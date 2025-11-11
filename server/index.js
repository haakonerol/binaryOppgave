

const express = require('express')
const app = express()

app.use(express.json())

const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

require('express-async-errors')

require('dotenv').config()
const PORT = process.env?.PORT || 8000
/*--------------------------------------------------------------*/

const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

/*--------------------------------------------------------------*/

app.all('/',(req, res)=> {
  res.send('Welcomm to Binary API')
})

app.use('/meldinger', require('./src/routes/meldingRouter'))

/*--------------------------------------------------------------*/

app.use(require('./src/middlewares/errorHandler'))

/*--------------------------------------------------------------*/

app.listen(PORT, ()=> console.log('Running: http://127.0.0.1:'+ PORT))