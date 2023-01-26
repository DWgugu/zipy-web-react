import { useState } from "react"
import { AuthContext } from "./AuthContext"
import useApi from "../../hooks/useApi"

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const api = useApi();

    const signin = async (user, password) => {
        const data = await api.signin(user, password);
        if(data.user) {
            setUser(data.user)
            return true;
        }
        return false;
    }

    const signout = () => {
        setUser(null)
    } 

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider