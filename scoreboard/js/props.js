

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <span className="stats"> Player : {props.totalPlayer}</span>
        </div>
    )
}

const Player = (props) =>{
    return(
        <div className='player'>
            <span className='player-name'>{props.name}</span>
            <Counter score={props.score}/>

        </div>
    )
}


const playerArray = [
    {name : 'kalkin2' , score : 20 , id : "1"},
    {name : 'kalkin3' , score : 30, id : "2"},
    {name : 'kalkin4' , score : 40, id : "3"},
    {name : 'kalkin5' , score : 50 , id : "4"}
]


//function component
const Counter = (props) =>{
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = () =>{
    return (
        <div className="scoreboard">
            <Header title ="My ScoreBoard" totalPlayer={playerArray.length}></Header>
            {/*<Player  name="kalkin" score={90}/>*/}
            {/*<Player  name="eony" score={80}/>*/}
            {/*<Player  name="dd" score={22}/>*/}
            {props.playerList.map(item => <Player name={item.name} score={item.score}  key={item.id}/>)}

        </div>
    )
}

ReactDOM.render(<App playerList={playerArray}/>,document.getElementById("root"));