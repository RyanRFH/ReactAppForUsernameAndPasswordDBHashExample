import './App.css';
import Register from './componets/Register';
import Login from './componets/Login';
import AllUsers from './componets/AllUsers';
import { useState, useEffect } from 'react';
import { getCookie } from './common';
import { authCheck } from './utils';

function App() {

  const [user, setUser] = useState() 

  useEffect (() => {
    // console.log("Use effect ran")
    let cookie = getCookie("jwt_token")
    // console.log(cookie)

    if (cookie !== false) {
      loginWithToken(cookie)
    }
  },[])

  const loginWithToken = async (cookie) => {
    // make the request to my authCheck route
    let user = await authCheck(cookie)
    setUser(user)
  }

  return (
    <div className="App">
      <Register />
      <Login newUser={setUser}/>
      {user ? <h2>Welcome {user} you are logged in</h2> : <h2>You are not logged in, please log in</h2>}
      <br></br>
      <br></br>
      <AllUsers token={getCookie("jwt_token")}/>
    </div>
  );
}

export default App;
