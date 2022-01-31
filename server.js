let express = require('express')
let path = require('path')
let app = express()
let server = require('http').Server(app)

// use the environment port if available, or default to 3000
let port = process.env.port || 3001

// serve static files from /public
app.use(express.static('dist'))

// create an endpoint which just returns the index.html page
app.get('/', (req, res) => res.sendfile(path.join(__dirname, 'src/index.html')))

// start the server
server.listen(port, () => console.log(`server started on port ${port}`))