import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContexProvider'
import { Link, useNavigate } from 'react-router-dom'
const initialState = {
  Email: "",
  password: ""
}
export const Login = () => {
  const [login, setLogin] = useState(initialState)
  const [type, setType] = useState("")
  const navigate = useNavigate()
  const { reducerstate, dispatch } = useContext(AuthContext)
  console.log(reducerstate)


  
  const handleChange = (e) => {
    const { value, name } = e.target
    setLogin({ ...login, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(login)
    let url = ""
    type == "admin" ? url = "http://localhost:3001/adminlogin" : url = "http://localhost:3001/userlogin"

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    })
      .then(response => response.json())
      .then((response) => {
        const { user, token } = response
        alert(`${response.user} login successfull!`)
        dispatch({ type: user, payload: token })
        dispatch({ type: "userEmail", payload: login.Email })
        if (user == 'user' || "admin") navigate("/")
      })


  }
  return (
    <div>
      <form action="">
        <h2>Login Account</h2>
        <div>
          <h3>User</h3>
          <input type="radio" name="userType" onChange={() => { setType("user") }} />
          <h3>Admin</h3>
          <input type="radio" name="userType" onChange={() => { setType("admin") }} />
        </div>
        <input type="text" name="Email" placeholder='User Email' onChange={handleChange} />
        <input type="password" name='password' placeholder='User Password' onChange={handleChange} />
        <input type="submit" value={"Login"} onClick={handleSubmit} />
      </form>
      <Link to={'/register'}>Don't have an account?</Link>
    </div>
  )
}
