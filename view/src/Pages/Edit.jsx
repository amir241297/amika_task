import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../AuthContexProvider'



const Edit = () => {
    const location = useLocation()
    const { Author, Content, Created_At, Title } = location.state
    const { reducerstate } = useContext(AuthContext)
    const initialState = {
        Title: Title,
        Content: Content,
        Author: Author,
        Created_At: Created_At,
        Updated_At: reducerstate.userName
    }
    const [editForm, setEditForm] = useState(initialState)


    const handleChange = (e) => {
        const { name, value } = e.target
        setEditForm({ ...editForm, [name]: value })

    }

    const handleEdit = (e) => {
        e.preventDefault()
        let _id = location.state._id
        console.log(editForm)
        console.log(_id)
        fetch(`http://localhost:3001/edit/${_id}`, {
            method: "PATCH",
            body: JSON.stringify(editForm),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.states) alert("Product Updated!")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <form action="">
                <input type="text" value={editForm.Title} name='Title' onChange={handleChange} placeholder='Title' />
                <input type="text" value={editForm.Content} name='Content' onChange={handleChange} placeholder='Author ' />
                <input type="text" value={editForm.Author} name='Author' onChange={handleChange} placeholder='Content' />
                <input type='text' value={Created_At} name='Created_At' placeholder='Created At' onChange={handleChange} />
                <input type='text' value={editForm.Updated_At} name='Updated_At' placeholder='Updated At' onChange={handleChange}></input>

                <input type="submit" value={"Edit Data"} onClick={handleEdit} />
            </form>
        </div>
    )
}

export default Edit