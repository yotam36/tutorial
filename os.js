//os is s built in module
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

//method return the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS);