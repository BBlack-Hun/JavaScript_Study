// 요소 노드 주요 프로퍼티

const myTag = document.querySelector('#list-1');

// textContent
console.log(myTag.textContent);
myTag.textContent = '<li>new text!</li>';
// outerHTML
console.log(myTag.outerHTML);
// myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>';

// innerHTML
console.log(myTag.innerHTML);
// myTag.innerHTML += '<li>Exotic</li>';
