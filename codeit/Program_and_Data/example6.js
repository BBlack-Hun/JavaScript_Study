let myVoca = {
	// 코드를 작성해 주세요.
	addVoca: function (eng, kor) {
		myVoca[eng] = `${kor}`;
	},
	deleteVoca: function (eng) {
		delete myVoca[eng];
	},
	printVoca: function (eng) {
		console.log(`"${eng}"의 뜻은 "${myVoca[eng]}"입니다.`)
	}
  };
  
  // addVoca메소드 테스트 코드
  myVoca.addVoca('parameter', '매개 변수');
  myVoca.addVoca('element', '요소');
  myVoca.addVoca('property', '속성');
  console.log(myVoca);
  
  // deleteVoca메소드 테스트 코드
  myVoca.deleteVoca('parameter');
  myVoca.deleteVoca('element');
  console.log(myVoca);
  
  // printVoca메소드 테스트 코드
  myVoca.printVoca('property');