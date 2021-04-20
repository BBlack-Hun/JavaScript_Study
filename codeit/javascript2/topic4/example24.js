// catch문과 finally문

// 없는 주소이기 때문에 오류가 발생한다.
async function fetchAndPrint() {
  const response = await fetch('https://jsonplaceholder.typicode.commm/users');
  const result = await response.text();
  console.log(result);
}

// 오류가 발생하지만 catch문으로 넘어가서 오류가 출력된다
async function fetchAndPrint() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.commm/users',
    );
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// finally문은 항상 실행되는 문장이다.
async function fetchAndPrint() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.commm/users',
    );
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('exit');
  }
}

fetchAndPrint();
