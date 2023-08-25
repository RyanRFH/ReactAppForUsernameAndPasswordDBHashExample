import React from 'react'
import { useState } from 'react'
import { loginUser } from '../utils'



const Login = ({newUser}) => {
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await loginUser(username, password, newUser)
        
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <form className='loginForm' onSubmit={submitHandler}>
                <label>Username:
                    <input onChange={(event) => setUsername(event.target.value)}></input>
                </label>
                <br></br>
                <br></br>
                <label>Password:
                    <input onChange={(event) => setPassword(event.target.value)}></input>
                </label>
                <br></br>
                <br></br>
                <button type='submit'>Click here to submit</button>
            </form>
        </div>

    )
}

export default Login