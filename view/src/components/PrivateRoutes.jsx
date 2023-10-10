import React, { useContext } from 'react'
import { AuthContext } from '../AuthContexProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {reducerstate}=useContext(AuthContext)
    const{isAuth,userType}=reducerstate
    if(!isAuth) return <Navigate to={"/login"} />
    return children
}

export default PrivateRoutes