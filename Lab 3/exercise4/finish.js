const moment = require('moment')

const max = 50
const handleCounter = (err, counter, waitTime, timestamp) => {
    if(err) console.log(err)
    else {
        setTimeout(() => {
            console.log(`Counter: ${counter} Time: ${Math.floor(waitTime)} ms Timestamp: ${timestamp}`)
        }, waitTime)
    }
}

const callBackWait = (counter, callback) => {
    const now = moment()
    const waitTime = Math.random() * 3000
    const maxTime = 2500
    const err = waitTime > maxTime ? `ERROR: WaitTime cannot be greater than MaxTime, was: ${waitTime}, expected: < ${maxTime}` : null
    callback(err, counter, waitTime, now)
}

for(let i = 0; i < 10; i++) {
    callBackWait(i, handleCounter)
}