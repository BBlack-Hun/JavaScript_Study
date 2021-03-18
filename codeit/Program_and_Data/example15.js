// 배열의 메소드 (Array's Method)
let member = ['쿤칼래', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

console.log(member);
delete member[4];
console.log(member);

// splice(a) : 전달된 요소부터 그 이후의 파라미터를 삭제
// splice (a, b) 전달된 요소부터 b개만큼 삭제
// splice (a, b, c) 전달된 요소부터 b개만큼 삭제하고, c의 아이템을 그 자리에 넣는다. (c의 아이템의 갯수 제한은 없음 아마..)
member.splice(4);
console.log(member);
