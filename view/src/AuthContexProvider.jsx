import React, { createContext, useReducer } from 'react'

export const AuthContext = createContext()

const initialState = {
    isAuth: false,
    token: "",
    userType: "",
    userName: "",
    toggle: false
}

const reducer = (state = initialState, action) => {
    // console.log(state,action)
    const { type, payload } = action

    switch (type) {
        case "admin": return { ...state, isAuth: true, token: payload, userType: type }
        case "user": return { ...state, isAuth: true, token: payload, userType: type }
        case "TOGGLE": return { ...state, toggle: payload }
        case "userEmail": return { ...state, userName: payload }
        default: return state
    }
}

const AuthContexProvider = ({ children }) => {

    const [reducerstate, dispatch] = useReducer(reducer, initialState)


    const value = { reducerstate, dispatch }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContexProvider