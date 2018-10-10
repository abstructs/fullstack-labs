const request = require('request')

const fs = require('fs')

const writer = fs.createWriteStream('output.html')

request('http://google.com', (err, res, body) => {
    writer.write(body)
    writer.end()
})

