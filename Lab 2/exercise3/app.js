var events = require('events');
var eventEmitter = new events();

const handleAlarm = _ => console.log("Call 911!")

const handleCall = () => {
    console.log('Alarm has been triggered!');
    eventEmitter.emit('call2')
}

eventEmitter.on('call1', handleCall)
            .on('call2', handleAlarm)

eventEmitter.emit('call1')
