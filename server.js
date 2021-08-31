const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

const app = express()
app.use(express.json())
app.use('/style', express.static('./public/styles.css'))
app.use('/script', express.static('./public/index.js'))

let rollbar = new Rollbar({
    accessToken: '8a4a2b56c0234d718a2dda1ea4a86dd6',
    captureUncaught: true,
    captureUnhandledRejections: true
})

rollbar.log("yeeeehaw")

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/yeehaw', thisismadeup())

const port = process.env.PORT || 666

app.listen(port, () => console.log("yeehaw ride em cowboy on 666"))