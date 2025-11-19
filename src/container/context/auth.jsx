import { createContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {

    const authState = {
        user: sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("userInfo")) : null
    }

    const authReducer = (prevState, action) => {
        if (action.type === "setCredentials") {
            return { user: JSON.parse(sessionStorage.getItem("userInfo")) }
        }
        return prevState;
    }

    const [state, dispatch] = useReducer(authReducer, authState);

    useEffect(() => {
        dispatch({ type: "setCredentials" })
    }, [state.user])

    return <AuthContext.Provider value={{ user: state.user }}> 
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;