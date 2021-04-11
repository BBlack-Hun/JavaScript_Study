// 복습과 활용

export const title = 'Module';

const printer = (value) => {
  console.log(value);
};

const arrPrinter = (arr) => {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  });
};

// 선언된 변수나 함수를 코드 블록으로 묶어서 export할 수도 있다.
export { printer, arrPrinter };

// as 키워드를 통해 이름을 변경해서 export를 할 수 도 있다.
export { printer as namePrinter, arrPrinter };

// default 키워드를 통해 표현식을 export
const title2 = 'Module';

export default title2;

// 여러 대상을 객체 값으로 모아 내보내는 방식도 가능

export default { title, printer, arrPrinter };

// import를 사용하여, export한 항목들을 선택적으로 불러올 수 있다.
import {title, data } './modules.js';

// as 키워드를 통해 이름을 바꿀 수도 있다.
import {titls as moduleTitle, data} from './modules.js';

// 와일드카드(*)를 통해서 export 한 항목을 모두 불러 올 수 있다.
import * as module from './modules.js';

// default export된 대상을 import 할 때는, 축약형으로 불러올 수 있다.
import {default as modules } from './modules.js';

import modules from './modules.js'

