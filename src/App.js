import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
let colors = { color: 'bule', fontSize: '30px' };
function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','윤미최고']);
  let [따봉, 따봉변경] = useState(0);
  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
  }
  //글제목함수의 가나다순 정렬
  //  function 감자() {
  //   let 고구마 = [...글제목];
  //   고구마.sort();
  //   글제목변경(고구마);
  // }

//1.글제목이라는 state는 직접 수정할 수 없기 때문에 복사본을 만듭니다. 
//2.글제목이라는 state의 복사본을 만들어 newArray라는 변수에 저장합니다. 
//3.newArray의 0번째 데이터를 '여자코트 추천'으로 변경합니다.
//4.그리고 newArray를 글제목변경() 함수 안에 넣어서 글제목 state를 변경합니다. 
//이렇게 했을 시 문제가 생기는데 1번에서 문제가 생겼습니다.
//원래 자바스크립트 내에서 array나 object 자료형은 = 등호로 복사하시면 각각 별개의 자료형이 생성되는게 아니라 값을 공유합니다. 그렇기 때문에 복사본에 값이 변경되면 원본도 같이 변경됩니다.
//그렇기 때문에 단독복사본을 만들기 위해서 deep copy인 ...(=spread연산자)를 이용합니다. 이러면 값공유가 되지 않고 서로 독립적인 값을 가지게 됩니다.
//...란spread 연산자라고하는 ES6 신문법입니다. array나 object 자료형 왼쪽에 붙일 수 있으며 뜻은 중괄호나 대괄호를 벗겨주세요 라는 뜻입니다. 
  return (
    <div className="App">
      <div className="black-nav">
        <div className={colors}>개발 BLOG</div>
      </div>
      <div className="list">
        <button onClick={제목바꾸기}>욤</button>
        <h3>{글제목[0]}<span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
//1))JSX문법
//1.HTML에서 class가 React에서 사용하는 jsx문법에서는 className으로 표기합니다.
//2.React의 가장 큰 장점은 데이터바인딩이 쉽다는 것입니다. 데이터 바인딩이란 서버에서 가져온 데이터를 html에 보여지게 하는것입니다.
//2.데이터 바인딩은 중괄호를 사용해서 중괄호안에 변수명이나 함수를 입력하면 됩니다. 일반 js에서 데이터 바인딩을 하려면 document.querySelector().innerHTML="강남고기맛집" 이런식으로 문장이 길어집니다.
//2.src나 id , href도 마찬가지로 {}를 사용할 수 있습니다.
//3.html에서 style속성을 집어넣을 때 방법1.-> object 자료형으로 만든 스타일을 넣어야합니다. 따로 변수로 만들어서 이것도 마찬가지로 중괄호에 변수명만 넣어줘도 가능합니다.
//3.ex)let colors = { color: 'bule', fontSize: '30px' }; => {colors}
//4.변수를 만들어서 style속성을 주거나 방법2. css파일에 class를 만들어 사용하는 방법도 있습니다.
//2))state
//1.데이터 보관은 변수에 저장할 수 도 있지만 state에 저장할 수 있습니다.
//2.state는 state의 값이 변경되면 새로고침 없이 html이 자동으로 재렌더링 됩니다!! 반면 변수는 값이 바뀌어도 자동으로 재렌더링, 즉 update가 되지 않습니다.
//3.React jsx에서는 html에서 onclick를 다르게 쓰는데 1. Click이 대문자 2.{} 중괄호 사용 3.중괄호 안에 코드가 아닌 함수를 적기
//3. 단 es6문법인 ()=>{} 화살표 함수도 사용 가능합니다. 여기에서 {}에는 일반코드도 넣을 수 있습니다.
//4. state는 변수와는 다르게 값을 변경하실 때 지정된 변경함수를 쓰셔야합니다. => 따봉변경( 대체할 데이터 )