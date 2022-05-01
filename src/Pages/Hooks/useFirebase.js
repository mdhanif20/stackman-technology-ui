import firebaseInitialization from "../Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signOut,GoogleAuthProvider ,signInWithPopup, onAuthStateChanged,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useState, useEffect } from 'react';


firebaseInitialization();

const useFirebase = () =>{
    const [isLoading,setIsLoading] = useState(true);
    const [users,setUser] = useState({});
    const [ authError, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
    const singnInUser = (email,password) =>{
      setIsLoading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
          setError("")
          })
          .catch((error) => {
            setError(error.message)
          })
          .finally(()=>setIsLoading(false))
    }

    const signInWithGoogle = () =>{
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
        }).catch((error) => {
          setError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }

    const registerUser = (email,password,name) =>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
          setError("");
          const newUser = {email, displayName:name};
          //send name to firebase after creation
          setUser(newUser)
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          })
          .catch((error) => {
            setError(error.message)
          })
          .finally(()=>setIsLoading(false))
    }
 //observe user state
    useEffect(()=>{
      
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    },[])
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false))
    }
    return{
        users,
        isLoading,
        authError ,
        registerUser,
        logOut,
        singnInUser,
        signInWithGoogle
    }

}
export default useFirebase;