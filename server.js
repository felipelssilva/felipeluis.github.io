const express = require('express')
const path = require('path')
const nomeApp = process.env.npm_package_name
const ejs = require("ejs")
const app = express()

const port = process.env.PORT || 8080,
    getUrl = (req) => {
        req.protocol + '://' + req.get('host') + req.originalUrl
    }

let data = {
    url: ''
}

app.use(express.static(`${__dirname}/dist/${nomeApp}`))
app.set("view engine", "ejs")

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`))
})

app.post('/api', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })

    let result = ''

    try {
        result = JSON.stringify({
            "data": ''
        })
        res.write(result)
    } catch (e) {
        res.status(400).send('Invalid results')
    } finally {
        res.end()
    }
})

app.use((req, res) => {
    data.url = getUrl(req)
    res.status(404).render(`${__dirname}/dist/${nomeApp}/assets/errors/404.ejs`, { data: data })
})

app.listen(port)
console.log('Listening on port ' + port + '...')
