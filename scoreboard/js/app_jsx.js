/*
* jsx 문법 사용을 위해서는
* 1. index.html에  플러그인cdn을 추가해준다.
* 2. index.html에 app_jsx.js 선언부에  type="text/babel" 추가
* 3. 에디터에서 에러가 난다면 이클립스기준 상단우측에 switch를 눌러 es6 문법에서 jsx로 switch해준다.
* 4. 가로는 가독성을 위해 추가해주는것을 추천
* 5. {}를 jsx expression 이라고한다. 변수사용 가능하다
* 6. 주석은 ctrl+ /
* 7. className 은 camelCase 사용
* 8. https://babeljs.io 바벨 문법 참고 및 변환 : try it out
* */
const title =(
    <h1 id='main-title' title ='This is a title'>My First React Element</h1>
    )

//desc object virtual dom
const desc  = (
    <p>This is Description</p>
)

const myTitleId = 'REACT';
const myName = "kalkin"


//header object virtual dom ,  title, desc 객체를 포함한다
const header = (
    <header id={myTitleId}>{myName} 's {title}
    <p className='main-desc'>{desc}</p>
    </header>
)

console.log(header);

ReactDOM.render(header, document.getElementById('root'));