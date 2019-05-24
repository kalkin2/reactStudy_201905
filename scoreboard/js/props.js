

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
        <div className={}>


        </div>
    )
}

const App = () =>{
    return (
        <div className='scoreboard'>
            <Header title ="My ScoreBoard" totalPlayer={1+10}></Header>
            <Player  name={"kalkin"} score={100}/>
        </div>
    )
}
reactDOM.render(<App />),document.getElementById("root")