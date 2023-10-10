import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { AddData } from "../Pages/AddData"
import { Login } from "../Pages/Login"
import Register from '../Pages/Register'
import { AuthContext } from '../AuthContexProvider'
import PrivateRoutes from './PrivateRoutes'
import Edit from '../Pages/Edit'




const Routing = () => {
  const { reducerstate } = useContext(AuthContext)
  // console.log(reducerstate.userType)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addDate" element={<PrivateRoutes> <AddData />   </PrivateRoutes>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>

    </div>
  )
}

export default Routing