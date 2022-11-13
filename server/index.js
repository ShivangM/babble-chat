const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    // useUnifiedTropology: true,
    // useCreateIndex: true
}).then(() => {
    console.log('DB connected!')
}).catch((err) => {
    console.error(err.message)
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started at port: ${process.env.PORT}`);
})