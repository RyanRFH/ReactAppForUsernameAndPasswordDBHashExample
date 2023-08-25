import React from 'react'
import { useState } from 'react'
import { getAllUsers, deleteUser } from '../utils'

//BREAKS WHEN TRYING TO MAP THROUGH EMPTY USERLIST ARRAY

const AllUsers = ({token}) => {

    const [usersList, setUsersList] = useState([])

    const clickHandler = async () => {
        const tempUserList = await getAllUsers(token)

        if (tempUserList) {
            setUsersList(tempUserList)
        }

        // console.log("BEING RETURNED FROM GETALLUSERS = ", await getAllUsers(token))
        console.log("All users component user list = ", usersList)
    }

    
    const deleteAccount = async (index) => {
        deleteUser(usersList[index], token)
        clickHandler()
    }

    return(

        <div className='getAllUsers'>
            <button onClick={clickHandler}>Get All Users</button>
            <ol id="usersList">
                {usersList.map((user, index) => {
                    return (
                        <li key={index}>
                            Username: {user.username}
                            <br></br>
                            Email: {user.email}
                            <br></br>
                            Id: {user.id}
                            <br></br>
                            Account Creation Date: {user.createdAt}
                            <br></br>
                            <button onClick={() => deleteAccount(index)}>Delete Account</button>
                            <br></br>
                            <br></br>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default AllUsers