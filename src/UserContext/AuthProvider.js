import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
export const UserInfo = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  const [isLoginLoading,setIsLoginLoading] = useState(false)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const LogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoginLoading(false)
      })
      .catch(() => {
        alert("login failed!");
      });
  };
  const logout = () => {
    return signOut(auth);
  };

 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user.email)
        // console.log(" onAuthStateChanged");
         setUser(user);
      } else {
        // console.log("else onAuthStateChanged");
         setUser();
      }
    });
  }, [user]);
  const authInfo = {
    user,
    setUser,
    createUser,
    LogIn,
    logout,
    isLoginLoading,
    setIsLoginLoading
  };
  return <UserInfo.Provider value={authInfo}>{children}</UserInfo.Provider>;
};

export default AuthProvider;
