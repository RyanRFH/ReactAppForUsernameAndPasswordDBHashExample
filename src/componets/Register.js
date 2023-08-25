import React from 'react'
import { useState } from 'react'
import { registerUser } from '../utils'


const Register = () => {

    const [username, setUsername] =  useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [registeredMessage, setRegisteredMessage] = useState("")


    const submitHandler = async (event) => {
        event.preventDefault()
        const response = await registerUser(username, email, password)
        // console.log("register component response = ", response)
        response.message ? setRegisteredMessage(response.message) : setRegisteredMessage("An error occurred: " + response.errorMessage)

    }

    return (
        <div className='register'>
            <h2>Please register below</h2>

            <form className='registerForm' onSubmit={submitHandler}>
                <label>Username:
                    <input onChange={(event) => setUsername(event.target.value)} ></input>
                </label>
                <br></br>

                <label>Email:
                    <input onChange={(event) => setEmail(event.target.value)}></input>
                </label>
                <br></br>
                <label>Password:
                    <input onChange={(event) => setPassword(event.target.value)}></input>
                </label>
                <br></br>
                <button type='submit'>Click here to submit</button>
                <h1>{registeredMessage}</h1>
            </form>
            
        </div>
    )

}


export default Register