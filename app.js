const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('resonse', (name, age) => {
    console.log('data received ' + name + ': ' + age);
})

customEmitter.on('resonse', () => {
    console.log('some other event2');
})

customEmitter.emit('resonse', 'yotam',44);