import firebaseInitialization from "../Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signOut,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
import { useState, useEffect } from 'react';


firebaseInitialization();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    
    const auth = getAuth();
    const singnInUser = (email,password) =>{
      
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    const registerUser = (email,password) =>{
      
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
 //observe user state
    useEffect(()=>{
      
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
          });
          return () => unsubscribe;
    },[])
    const logOut = () =>{
      
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return{
        user,
        registerUser,
        logOut,
        singnInUser
    }

}
export default useFirebase;