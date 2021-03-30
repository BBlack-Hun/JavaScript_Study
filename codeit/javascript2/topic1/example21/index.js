// 이벤트 위임 (Event Delegation)
const list = document.querySelector('#list');
list.addEventListener('click', function (e) {
  // if (e.target.tagName === 'LI')
  // 해당 태그가 있는 돔에 대해서는~
  if (e.target.classList.contains('item')) {
    e.target.classList.toggle('done');
  }
});

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);
// 왠만해서는 이벤트 버블링을 막지 않는 것이 좋다.
li.addEventListener('click', function (e) {
  e.stopPropagation();
});
