import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import "./LogIn.css"
const LogIn = () =>{

    const navigate=useNavigate();
    const [values,setValues]=useState({
       
        email:"",
        pass:"",
    });

    const setEmailError=(err)=>{
        alert(err);
    }
    const setPasswordError=(errpass)=>{
        alert(errpass);
    }
    const[submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

    const handleSubmission=()=>{
        if( !values.email || !values.pass){
            alert("Fill all the fields");
            return;
        }
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth ,values.email, values.pass).then( async(res)=>{
            setSubmitButtonDisabled(false);
            navigate("/Page"); 
           
             }).catch((error)=>{
                switch(error.code){
                    case "auth/Invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(error.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(error.message);
                    break;
                    default:
                }
                
                }
               
             );
            }
            return (
         <div className="form">
                <h2>Sign In</h2>
                <form>
                    <input type="email" placeholder="Enter your email" className="input" onChange={(event) => setValues((prev)=>({...prev, email:event.target.value}))}/>
                    <input type="password" placeholder="Password" className="input" onChange={(event) => setValues((prev)=>({...prev, pass:event.target.value}))}/>
                    <button type="submit" disabled={submitButtonDisabled} onClick={handleSubmission}>Sign In</button>
                </form>
                
            </div> 
    );
}

export default LogIn;