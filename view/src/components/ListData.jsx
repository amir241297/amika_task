import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContexProvider'
import { useNavigate } from 'react-router-dom'

const ListData = (data) => {
    const { dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleDelete = (_id) => {
        // console.log(_id)

        fetch(`http://localhost:3001/delete/${_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                alert("Product Deleted!")
                dispatch({ type: "TOGGLE", payload: true })
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleEdit = (data) => {
        // console.log(data)
        navigate("/edit", { state: data })

    }
    const { Author, Content, Created_At, Title, Updated_At, _id }=data
    return (
        <>
            <td> {Author}</td>
            <td>{Content}</td>
            <td>{Title}</td>
            <td>{Created_At}</td>
            <td>{Updated_At}</td>
            <td className='button'><button onClick={() => handleEdit(data)}>Edit</button></td>
            <td className='button'><button onClick={() => handleDelete(_id)}>Delete</button></td>
         </>
    )
}

export default ListData