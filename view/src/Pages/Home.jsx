import React, { useContext, useEffect, useState } from 'react'
import ListData from '../components/ListData'
import { AuthContext } from '../AuthContexProvider'
import "../styles/home.css"

const Home = () => {
  const [data, setData] = useState([])
  const { reducerstate } = useContext(AuthContext)
  // console.log(reducerstate)

  const fetchData = async () => {
    try {
      let res = await fetch("http://localhost:3001/products")
      res = await res.json()
      console.log(res)
      setData(res)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
  }, [reducerstate.toggle])
  // {Author,Content,Create_At,Title,Updated_At}
  return (
    <div id='Home_div'>
      <h2>Home</h2>
      <table>
        <tr className='table_row'>
          <th>Author</th>
          <th>Content</th>
          <th>Title</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th className='button'>Edit</th>
          <th className='button'>Delete</th>
        </tr>
        {data.map((ele) => (
          <tr>
            <ListData key={ele._id} {...ele} />
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Home