// 한꺼번에 다루기
// 사용하는 것만 가져오면 된다
// 만약 모두 불러와야 한다면, 작성해야 할 내용들이 많다.
// import { print } from './printer.js';
// import { title, data as members } from './members.js';

// 아래와 같이 작성할 경우, 길이가 길어진다.
// import { title as printerTitle, print as consolePrinter } from './printer.js';
// import { title as membersTitle, data as membersData } from './members.js';

// 별표를 쓰면 간단해 진다.
import * as printerJS from './printer.js';
import { title as membersTitle, data as membersData } from './members.js';

// const title = 'Codeit';

// print(title);
// print(members);
console.log(printerJS.title);
printerJS.print(membersTitle);
printerJS.print(membersData);
