import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContexProvider'

const initialState = {
  Title: "",
  Content: "",
  Author: "",
  Created_At: "",
  // Updated_At: "temp"
} 
export const AddData = () => {
  const {reducerstate}=useContext(AuthContext)
  console.log(reducerstate)
  const [data, setData] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(data)
      fetch('http://localhost:3001/addProducts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then((response) => {
            console.log(JSON.stringify(response))
        })
    }
  return (
    <div>
      <form action="">  
        <input type="text" name='Title' onChange={handleChange} placeholder='Title' />
        <input type="text" name='Content' onChange={handleChange} placeholder='Author ' />
        <input type="text" name='Author' onChange={handleChange} placeholder='Content' />
        <input type='text' name='Created_At' placeholder='Created At' value={reducerstate.userName} onChange={handleChange}/>

        <input type="submit" value={"Add Data"} onClick={handleSubmit} />
      </form>
    </div>
  )
}
