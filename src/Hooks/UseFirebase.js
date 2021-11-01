import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../FirebaseConfig/FirebaseInitial";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        })
    }, []);
    return {
        user,
        signInUsingGoogle,
        logout,
        isLoading,
        setIsLoading,
        auth
    }
}

export default useFirebase;