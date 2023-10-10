import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const initialState = {
    name: "",
    Email: "",
    password: ""
}
const Register = () => {
    const [register, setRegister] = useState(initialState)
    const [type, setType] = useState("")
    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(name,value)
        setRegister({ ...register, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(register)

        let url = ""
        type == "user" ? url = "http://localhost:3001/userRegister" : url = "http://localhost:3001/adminRegister"
        fetch(url, {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(register)
        })
            .then(response => response.json())
            .then((response) => {
                alert(response.response)
                if (response.message) navigate('/login')
            })
    }

    return (
        <div>
            <form>
                <h2>Create Account</h2>
                <div>
                    <h3>Admin</h3> <input type="radio" name='userType' onChange={() => { setType('admin') }} />
                    <h3>User</h3> <input type='radio' name='userType' onChange={() => setType('user')} />
                </div>
                <input type="text" placeholder='Name' name={"name"} onChange={handleChange} />
                <input type="email" placeholder='Email id' name='Email' onChange={handleChange} />
                <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                <input type="submit" value={"Register"} onClick={handleSubmit} />
            </form>
            <Link to={'/login'}>have an account?</Link>
        </div>
    )
}

export default Register