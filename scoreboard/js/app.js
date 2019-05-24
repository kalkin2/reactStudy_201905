//createElement는 3가지 파라메터를 가진다. 첫번째는 엘리먼트 혹은 노드, 두번째는 속성, 세번째는 자식 노드

//title object, virtual dom
const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title'},
    'My First React Element'
)

//desc object virtual dom
const desc  = React.createElement(
    'p'
    ,null
    ,'This is Description'
)


//header object virtual dom ,  title, desc 객체를 포함한다
const header = React.createElement(
    'header'
    ,null
    ,title,desc
)


console.log(title);

//실제 DOM 노드로 렌더링
ReactDOM.render(header,document.getElementById('root'))


/**
 * 결과 :
 * <header>
 *     <h1 id="main-title" title="This is a title">My First React Element</h1>
 *     <p>This is Description</p>
 * </header>
 *
 * react 는 실제 DOM을 다루는게 아니라 DOM에 매핑 되는 자바스크립트 객체를 다룬다는것이 Virtual DOM의 핵심이다.
 * 
 * */