const app = require('./app');
const http = require('http');
const debug = require('debug')('nodestr:server');

// PORT // based on express-generator
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

// error handler
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);

    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);

    default:
      throw error;
  }
}

// listener handler
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

// server
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`API is alive on ${port}!`);






// const express = require('express')
// const path = require('path')
// const nomeApp = process.env.npm_package_name
// const ejs = require("ejs")
// const app = express()

// const port = process.env.PORT || 8080,
//     getUrl = (req) => {
//         req.protocol + '://' + req.get('host') + req.originalUrl
//     }

// let data = {
//     url: ''
// }

// app.use(express.static(`${__dirname}/dist/${nomeApp}`))
// app.set("view engine", "ejs")

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`))
// })

// app.post('/api', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'application/json'
//     })

//     let result = ''

//     try {
//         result = JSON.stringify({
//             "data": ''
//         })
//         res.write(result)
//     } catch (e) {
//         res.status(400).send('Invalid results')
//     } finally {
//         res.end()
//     }
// })

// app.use((req, res) => {
//     data.url = getUrl(req)
//     res.status(404).render(`${__dirname}/dist/${nomeApp}/assets/errors/404.ejs`, { data: data })
// })

// app.listen(port)
// console.log('Listening on port ' + port + '...')
