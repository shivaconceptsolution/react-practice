var events = require('events')
var eventEmitter = new events.EventEmitter()
var fun = function()
{
    console.log('hello world')
}
eventEmitter.on('click',fun)  // create event
eventEmitter.emit('click')   //trigger event
