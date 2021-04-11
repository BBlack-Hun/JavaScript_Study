// default export
import printerJS from './printer.js';
// import {
//   default as codeit,
//   title as membersTitle,
//   data as membersData,
// } from './members.js';

import * as memberJS from './members.js';

console.log(printerJS.title);
printerJS.print(memberJS.title);
printerJS.print(memberJS.data);
console.log(memberJS.default);
