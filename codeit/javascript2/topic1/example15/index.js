// HTML 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.getAttribute('속성'): 속성에 접근하기
console.log(tomorrow.getAttributeNode('href'));
console.log(item.getAttribute('class'));

// id 속성
console.log(tomorrow);
console.log(toString.id);

// class 속성
console.log(item);
console.log(item.className);

// href 속성
console.log(link);
console.log(link.href);
console.log(tomorrow.href);
