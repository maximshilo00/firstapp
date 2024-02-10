const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../client/public')))

app.get('/api', (req, res) => {
    res.json({
        message : 'Hello from server!'
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public/', 'index.html'))
})

const PORT = process.env.PORT || '8000'

app.listen(PORT, () => { console.log(`Server is up; Listening to ${PORT}`)})