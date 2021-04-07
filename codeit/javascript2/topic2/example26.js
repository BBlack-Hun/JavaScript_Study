// finally 문

try {
  // 실행할 코드
} catch (err) {
  // 에러가 발생했을 떄 실행할 코드
} finally {
  // 항상 실행할 코드
}

function printMembers(...members) {
  for (const member of members) {
    console.log(memeber);
  }
}

try {
  printMembers('영훈', '윤수', '동욱');
} catch (err) {
  // alert('에러가 발생하였습니다.');
  console.log('에러가 발생하였습니다.');
  console.error(err);
} finally {
  const end = new Date();
  const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
  console.log(msg);
}

// finally 문에서의 에러 처리
try {
  try {
    // 실행할 코드
  } catch (err) {
    //에러가 발생했을 때 실행할 코드
  } finally {
    //항상 실행할 코드
  }
} catch (err) {
  // finally문에서 에러가 발생했을 때 실행 할 코드
}
