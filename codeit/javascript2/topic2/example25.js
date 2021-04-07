// try catch 활용하기
function printMembers(members) {
  try {
    for (const member of members) {
      console.log(member);
    }
  } catch (err) {
    console.error(err);
    // alert(`${err.name}가 발생하였습니다. 콘솔창을 확인해 주세요!`);
  }
}

const teamA = ['상해', '혜진', '지혜', '혜선'];
printMembers(teamA);

const codeit = { name: 'codeit' };
printMembers(codeit);

const teamB = ['영훈', '재훈', '종훈', '정훈'];
printMembers(teamB);

try {
  const title = 'Codeit';
} catch (err) {
  console.error(err);
}

console.log(title);

// 에외 처리 (Excepoton Handling)
