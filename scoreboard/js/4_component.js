/*
* component 의 사용
* 재사용할 경우가 있을경우 function component 를 만든다
* 첫글자는 대문자를 사용한다.
* return 문에는 div 로 감싸준다
* */
//공통 header
const Header  = (props) =>{
    console.log(props)
    return(
        <div><b>Header's name : </b> {props.name} <b>data-attr's value : </b> ={props.dataAttr}</div>
    )
}

//공통 Footer
const Footer  = () =>{
    return(
        <div>Footer</div>
    )
}


const App = () => {
    return (
        <div>
        <Header id='myheader' name='myheader' dataAttr='header01' />
            Contents ...
        <Footer />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))

