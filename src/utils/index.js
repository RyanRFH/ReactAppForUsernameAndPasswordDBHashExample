import { writeCookie } from "../common"

export const registerUser = async (username, email, password) => {
    try {
        const response = await fetch("http://localhost:5001/users/register", {
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        // console.log(error)
        return error
    }
}

export const loginUser = async (username, password, newUser) => {
    try {
        const response = await fetch("http://localhost:5001/users/login", {
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const data = await response.json()
        console.log(data)

        //Set current user to this user
        newUser(data.user.username)


        console.log("Writing cookie")


        writeCookie("jwt_token", data.user.token, 7)
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = async (token) => {
    try {
        const response = await fetch("http://localhost:5001/users/getAllUsers", {
            method: "GET",
            headers:{"Content-Type" : "application/json", "Authorization" : `${token}`}
        })
        const data = await response.json()

        // console.log("utils getAllUsers data = ", data)

        if (data.error) {
            throw new Error("Error received from database")
        }
        return data.users
    } catch (error) {
        console.log(error)
    }
}

export const authCheck = async (token) => {
    try {
        const response = await fetch("http://localhost:5001/users/authCheck", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization":  token
            }
        })
        const data = await response.json()
        return data.user.username
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (user, token) => {
    const response = await fetch("http://localhost:5001/users/deleteUser", {
        method: "DELETE",
        headers:{"Content-Type" : "application/json", "Authorization" : token},
        body: JSON.stringify({
            id : user.id
        })
    })

    const data = await response.json()
    console.log(data)
}