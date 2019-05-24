var userInput =  (
     <input type='text' id='userName' name='userName'></input>
);


var userPw =  (
     <input type='text' id='userPw' name='userPw'></input>
)

var loginform = (
    <table>
        <tr>
            ID : <td><input type='text' id='userName' name='userName'></input></td>
            PW : <td><input type='text' id='userPw' name='userPw'></input></td>
                 <td><button type='button' id='userPw' name='userPw'>Login</button></td>
        </tr>
    </table>
)



//Render
ReactDOM.render(
    loginform,document.getElementById('root')
)