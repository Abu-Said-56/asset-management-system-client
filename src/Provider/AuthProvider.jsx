import { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth/cordova";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const userInfo = {

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;