/*
* 시간에 따라 변하는 데이터가 있다면 그 상태를 state로 관리하고 state의 값을 변경하게 되면 state와 연결된 뷰가 자동으로 렌더링이 된다. 이것이 리액트의 가장 중요한 핵심 개념이다
* 함수형 function은 단순히  props를 받아 리턴하지만,
* class형은 동적인 상태를 유지 할 수 있다.
*
*
*/

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <span className="stats"> Player : {props.totalPlayers}</span>
        </div>
    )
}

const Player = (props) =>{
    console.log("Payers id ="+props)
    return(
        <div className='player'>
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>삭제(x)</button>
            </span>
            <span className='player-name'>{props.name}</span>
            <Counter score={props.score}/>

        </div>
    )
}



//class component
class Counter extends React.Component{

    //동적으로 값을 변경하고자 하면 무조건 state 선언후 setState를 통해 바꾸어야 한다.
    //클래스의 퍼블릭 속성 es6문법
    state = {
        score : 3
    };

    //증가 function
    incrementFnc = () => {

        this.setState(prevState => {
            console.log('이전 상태값 : ',prevState)
            return {score: prevState.score + 1}
        });

    }

    //감소 function
    decrementFnc = () => {
        this.setState(prevState => {
            console.log('이전 상태값 : ',prevState)
            return {score: prevState.score - 1}
        });
    }

    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementFnc} >-</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementFnc} > +</button>
            </div>
        );
    }
}


class App extends React.Component{
    state = {
        players : [
            {name: 'kalkin2', id: "1"},
            {name: 'kalkin3', id: "2"},
            {name: 'kalkin4', id: "3"},
            {name: 'kalkin5', id: "4"}
        ]
    };


    //선택한 아이디를 제외한 나머지 배열을 복사하여 화면에 리턴..
    removePlayer = (id) => {
        console.log("id",id)
        this.setState(prevState =>{
            return{
                players : prevState.players.filter(item => item.id !== id)
            }
        })
    }
    render() {
        return (
            <div className="scoreboard">
                <Header title="My ScoreBoard" totalPlayers={this.state.players.length}></Header>
                {this.state.players.map(item => <Player name={item.name} id={item.id} key={item.id.toString()} removePlayer={this.removePlayer}/>)}

            </div>
        )
    }
}


ReactDOM.render(<App />,document.getElementById("root"));