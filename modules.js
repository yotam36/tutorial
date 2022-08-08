//modules- encapsulated code (only shares minimum)
//commonJS- every file is a module by default

const names = require('./names-modules.js');
const say= require('./utils.js');
const alt = require('./alt-export.js');

require('./mind-grenade.js');

console.log(alt);

say(names.n);
say(names.y);
say(names.s);