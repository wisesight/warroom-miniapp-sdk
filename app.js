const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('src'))
app.get('/', (req, res) => {
    res.sendFile('public/warroom.html', {root: __dirname })
})

app.get('/miniapp', (req, res) => {
    res.sendFile('public/miniapp.html', {root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})