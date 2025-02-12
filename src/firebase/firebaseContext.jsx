import { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../conf/firebaseConfig";

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setDisplayName(user.displayName || ""); // Store the display name
      } else {
        setUser(null);
        setDisplayName("");
      }
    });
  }, []);

  const signupUser = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update the user's display name
    await updateProfile(user, {
      displayName: name,
    });

    return user;
  };

  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinWithGoogle = () => signInWithPopup(auth, googleProvider);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setDisplayName("");
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUser,
        signinUser,
        signinWithGoogle,
        isLoggedIn,
        logout,
        displayName,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
