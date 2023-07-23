import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';

export const authContext = createContext(null);

const Provider = ({ children }) => {
    const [formLoading, setFormLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    function signUpUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function loginUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function continueWithGoogle() {
        return signInWithPopup(auth, googleProvider);
    }
    function continueWithGithub() {
        return signInWithPopup(auth, githubProvider);
    }

    function logOutUser() {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser(currentUser);
                setLoading(false);
            }else {
                setUser(null);
                setLoading(false);
                localStorage.removeItem('userToken');
            }
        })
        return () => unSubscribe();
    }, [auth]);

    const authInfo = { user, loading, formLoading, setFormLoading, continueWithGoogle, continueWithGithub, signUpUser, loginUser, logOutUser };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Provider;