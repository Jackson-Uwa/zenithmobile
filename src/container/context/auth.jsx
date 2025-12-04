import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = (props) => {

    const authState = {
        user: sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("userInfo")) : null,
        token: Cookies.get("jwt") ? Cookies.get("jwt") : ""
    }

    const authReducer = (prevState, action) => {
        if (action.type === "setCredentials") {
            try {
                let token = null
                if (prevState.user)
                    token = jwtDecode(sessionStorage.getItem("userInfo"))
                // token = jwtDecode(Cookies.get("jwt"), { header: true })
                console.log(token)
                return {
                    user: JSON.parse(sessionStorage.getItem("userInfo")),
                    token
                }
            } catch (error) {
                toast.error(error)
            }
        }
        return prevState;
    }

    const [state, dispatch] = useReducer(authReducer, authState);

    useEffect(() => {
        dispatch({ type: "setCredentials" })
    }, [Cookies.get("jwt")])

    return <AuthContext.Provider value={{ user: state.user }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;