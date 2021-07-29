const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('public/index.html', {root: __dirname })
})

app.get('/miniapp', (req, res) => {
    res.sendFile('public/miniapp.html', {root: __dirname })
})

app.post('/verify-token', (req, res) => {
    res.status(200).send({status: 'success', statusCode: 200})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})