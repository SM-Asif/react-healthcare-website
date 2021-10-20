import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //handle email, password register
    const processRegister = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const setUserName = (username) => {
        updateProfile(auth.currentUser, {
            displayName: username
        }).then(() => {
        }).catch((error) => {
            setError(error.message);
        });
        return true;
    }
    const processLogin = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    

    //handle google signin
    const googleSignin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //logout user
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    //set user info to firebase state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        });
    }, []);
    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        error,
        setError,
        processRegister,
        setUserName,
        processLogin,
        googleSignin,
        logout
    }

}
export default useFirebase;