const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

// 1. updateToDo 함수를 완성해 주세요.
function updateToDo(event) {
  console.log('test');
  //   event.target.className = 'done';
  event.target.classList.toggle('done'); // 모범답안!
}

// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록해 주세요.
for (let i of items) {
  i.addEventListener('click', updateToDo);
}

// 테스트 코드
items[2].removeEventListener('click', updateToDo);
