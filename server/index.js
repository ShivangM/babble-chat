const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')

const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use("/api/auth", userRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    // useUnifiedTropology: true,
    // useCreateIndex: true
}).then(() => {
    console.log('[Server]::DB CONNECTED')
}).catch((err) => {
    throw new Error(`[Server]::ERROR:${err.message}`);
})

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log("[Server]::LISTEN:%s", PORT);
})

app.on("error", error => {
    throw new Error(`[Server]::ERROR:${error.message}`);
});