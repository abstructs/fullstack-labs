const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')

    if(req.url   == '/spin') {
        console.log("spinning..")
    }
    else if(req.url == '/play') {
        console.log("playing..")
    } else {
        if(req.url != '/favicon.ico') console.log("Please play or spin.")
    }

    res.end("Check console")
    
})

// server.listen('/spin', (req, res) => {
//     res.end()
// })

// server.listen('/play', (req, res) => {
    
// })

server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`)
})