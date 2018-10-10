const url = require('url')
const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')

    var searchParams = new url.URL(`${hostname}:${port + req.url}`).searchParams
    console.log(`${hostname}:${port + req.url}`)

    // const searchParams = new URL(req.url).searchParams

    const play = searchParams.get("play")
    console.log(searchParams)
    // const amount = searchParams.get("amount")
    // const spin = searchParams.get("sppin")

    // if(play) {
        res.end(play)
    // }

    res.end("hi")
    


    // res.end(url.parse(req.url).search.get("name"))
    
})

// server.listen('/spin', (req, res) => {
//     res.end()
// })

// server.listen('/play', (req, res) => {
    
// })

server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`)
})