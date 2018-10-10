const handleCounter = (result) => {
    console.log('The callback count is ' + result)
}

const callbackLoop = (num, callback) => {
    for(let i = 1; i <= num; i++) callback(i)
    console.log('**** Exiting callbackLoop ****')
}

callbackLoop(5, handleCounter)
callbackLoop(2, handleCounter)
callbackLoop(7, handleCounter)