const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flatMapDeep(items);

console.log(newItems);

// https://youtu.be/Oe421EPjeBE?t=7399
// 2:03:00