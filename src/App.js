import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
let posts = "강남 고기 맛집";
let colors = { color: 'bule', fontSize: '30px' };
function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']);
  return (
    <div className="App">
      <div className="black-nav">
        <div className={colors}>개발 BLOG</div>
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
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