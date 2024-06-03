import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth).then(() => setUser(null));
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const getUserInfo = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/user/${email}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user information");
      }
      const userData = await response.json();

      setUser(userData.data);
      return userData;
    } catch (error) {
      console.error("Error fetching user information:", error.message);
      throw error;
    }
  };
  //get token
  useEffect(() => {
    // Retrieve token from localStorage on component mount
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        getUserInfo(currentUser?.email);

        setLoading(false);
        console.log(currentUser);
      } else {
        setLoading(false);
      }
    });
    return () => {
      return unscubcribe();
    };
  }, []);

  const authInfo = {
    user,
    googleLogin,
    createUser,
    signIn,
    logout,
    loading,
    token,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
