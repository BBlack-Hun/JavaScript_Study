const spait = [
  {
    codeName: 'ApplePie',
    members: ['스파이', '스파이', '스파이', '스파이', '스파이'],
  },
  {
    codeName: 'BigBoss',
    members: ['스파이', '스파이', '스과이', '스파이', '스파이'],
  },
  {
    codeName: 'CEO',
    members: ['스파이', '스파이', '스파이', '습하이', '스파이'],
  },
  {
    codeName: 'DeathNote',
    members: ['스파이', '스파이', '스파이', '스파이', '스파이'],
  },
  {
    codeName: 'EarlyBird',
    members: ['스파이', '스마이', '스파이', '스파이', '스파이'],
  },
  {
    codeName: 'Faker',
    members: ['스파이', '스파이', '스파이', '스파이', '스파이'],
  },
];

function checkSpy(team) {
  // 여기에 코드를 작성해 주세요.
  const { codeName, members } = team;
  const test = members.every(
    (el) =>
      // console.log(el);
      el == '스파이',
  );
  if (test == true) {
    message = `팀 ${codeName} 에는 이중 스파이가 없습니다.`;
  } else {
    message = `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다!`;
  }

  console.log(message);
}

// 테스트 코드
spait.forEach((team) => checkSpy(team));
