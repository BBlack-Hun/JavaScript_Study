fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // throw new Error('too long');
  })
  .then((result) => {
    console.log(result);
    // throw new Error('no required field');
  })
  .catch((error) => {
    console.log(`${error.name}: ${error.message}`);
  });

/**
   * 
   * catch 메소드 이전에 존재하는 4개의 Promise 객체를 순서대로 하나씩 rejected 상태로 만들어봅시다. 하나의 Promise 객체를 rejected 상태로 만들기 전에 다른 Promise 객체는 fulfilled 상태가 되게끔 다시 수정해줘야 합니다. 이 점에 주의하고 아래 내용을 읽어보세요.
1. 첫 번째 Promise 객체 rejected 상태로 만들기
fetch('https://jsonplaceholder.typicode.commmm/users')
...
  .catch((error) => {
    console.log(`${error.name}: ${error.message}`);
  });
존재하지 않는 URL을 fetch 함수의 파라미터에 전달하면, fetch 함수의 작업이 실패하고 fetch 함수가 리턴한 Promise 객체의 상태도 rejected 상태가 될 것입니다. 이렇게 고치고 코드를 실행해보면
FetchError: request to https://jsonplaceholder.typicode.commmm/users failed, reason: getaddrinfo ENOTFOUND jsonplaceholder.typicode.commmm
이런 에러 메시지가 출력됩니다. URL 주소에 문제가 있어서 리퀘스트를 보낼 수 없다는 내용이죠?
2. 두 번째 Promise 객체 rejected 상태로 만들기
fetch('https://google.com')
  .then((response) => response.json())
...
  .catch((error) => {
    console.log(`${error.name}: ${error.message}`);
  });
response.json()에서 에러가 나게 하려면 어떻게 해야할까요? JSON 말고 다른 타입의 데이터를 리스폰스의 바디에 담아서 보내주는 URL로 리퀘스트를 보내면 되겠죠? fetch 함수의 URL에 HTML 코드 등을 리스폰스로 주는 구글 홈페이지 URL을 입력하고 실행해보겠습니다. 실행해보면
FetchError: invalid json response body at https://www.google.com/ reason: Unexpected token < in JSON at position 0
이런 에러 정보가 출력됩니다. '유효하지 않은 JSON 리스폰스 바디'라는 에러 메시지를 볼 수 있네요.
3. 세 번째 Promise 객체 rejected 상태로 만들기
...
  .then((result) => {
    console.log(result);
    throw new Error('too long');
  })
...
  .catch((error) => {
    console.log(`${error.name}: ${error.message}`);
  });
여기서부터는 인위적으로 에러 객체를 throw하는 부분인데요. 
에러 객체를 throw하는 기존 코드의 주석을 해제해주면 됩니다. 그리고 코드를 실행하면
  [리스폰스의 내용]
  Error: too long
앞 부분에 리스폰스의 내용이 잘 출력되고, 그 뒤에 에러 정보가 출력됩니다.
4. 네 번째 Promise 객체 rejected 상태로 만들기
...
  .then((result) => {
    throw new Error('no required field');
  })
  .catch((error) => {
    console.log(`${error.name}: ${error.message}`);
  });
3번과 마찬가지로 에러 객체를 throw 하는 부분을 주석 해제하고 실행해보면
  [리스폰스의 내용]
  Error: no required field 
앞 부분에 리스폰스의 내용이 잘 출력되고, 그 뒤에 에러 정보가 출력됩니다. 


방금 한 것처럼 catch 메소드에서는 콜백으로 전달된 Error 객체를 조사함으로써 Promise Chain 중 어디에서 문제가 발생했는지 판단할 수 있습니다. 
만약 필요하다면 예를 들어, 이런 식으로
...
  .catch((error) => { 
    if(error.message === 'A'){

    }else if(error.message === 'B'){

    }else if(error.message === 'C'){

    }else{

    }
  });
각 에러마다 적합한 작업(로깅, 회복 작업 등)을 나누어서 처리해줄 수도 있겠죠? (실전에서는 좀더 깔끔한 방식으로 저 부분을 함수로 따로 만들든지 할 겁니다.)
그리고 이번 실습에서는 에러 객체를 만들기 위해 단순히 new Error를 했지만, 
여러분이 자바스크립트로 나만의 에러 객체(Custom Error)를 만드는 방법을 알게 되면
...
  .catch((error) => { 
    if(error instanceof TypeError){

    }else if(error instanceof CustomErrorType_A){

    }else if(error instanceof CustomErrorType_B){

    }else{

    }
  });
이런 식으로 파라미터로 넘어온 에러 객체에 instanceof라는 연산자를 붙여서 어느 타입의 에러 객체인지를 좀더 세련된 방식으로 확인할 수 있습니다. 이 내용은 Custom Error 객체를 만드는 방법에 대해 공부하고 나서 다시 살펴보세요.
   */
