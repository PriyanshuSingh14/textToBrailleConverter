import { useState } from "react";
import "./SignUpForm.css";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../firebase";
// import { async } from "@firebase/util";
const SignUpForm=()=>{
    const setEmailError=(err)=>{
        alert(err);
        //setSubmitButtonDisabled(false);
    }
    const setPasswordError=(error)=>{
        alert (error);
        //setSubmitButtonDisabled(false);
    }
    const navigate=useNavigate();
    const [values,setValues]=useState({
        firstName:"",
        lastName:"",
        email:"",
        pass:"",
    });
    const[submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

    const handleSubmission=()=>{
        if(!values.firstName || !values.lastName || !values.email || !values.pass){
            alert("Fill all the credentials!!");
            return;
        }
        // setSubmitButtonDisabled(true);
        
        createUserWithEmailAndPassword(auth ,values.email, values.pass).then( async(res)=>{
            //setSubmitButtonDisabled(false);
            const user=res.user;
            console.log("User signed up --> ", res);
            alert("User Successfully added");
             await updateProfile(user,{
                displayName:values.firstName,
            })
            navigate("/Page");
        }).catch((err)=>{
            switch(err.code){
                case "auth/email-already-in-use":
                    alert("Email already in used");
                    break;
                case "auth/invalid-email":
                    setEmailError(err.message);
                    // setSubmitButtonDisabled(false);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    // setSubmitButtonDisabled(false);
                    break;
                default:
                    alert("SOme error msg")
                    console.log(err)
                    // setSubmitButtonDisabled(false);
                
            }

        })
           
        // }).catch((err)=>{
        //     switch(err.code){
        //         case "auth/email-already-in-use":
        //         case "auth/invalid-email":
        //             setEmailError(err.message);
        //             setSubmitButtonDisabled(false);
        //             break;
        //         case "auth/weak-password":
        //             setPasswordError(err.message);
        //             setSubmitButtonDisabled(false);
        //             break;
        //         default:
        //             navigate("/Page");
        //             setSubmitButtonDisabled(false);
                
        //     }

        // })
       

    }
    return(
        
        <div className="formm">
        <h2>Sign Up</h2>
        <div>
            <input type="text " placeholder="first name"  className="userinput" onChange={(event) => setValues((prev)=>({...prev, firstName:event.target.value}))}></input>
            <input type="text " placeholder="last name" className="userinput" onChange={(event) => setValues((prev)=>({...prev, lastName:event.target.value}))}></input>
            <input type="email " placeholder="Enter your e-mail" className="usermailinput" onChange={(event) => setValues((prev)=>({...prev, email:event.target.value}))}></input>
            <input type="password" placeholder="Enter your password" className="userpassinput" onChange={(event) => setValues((prev)=>({...prev, pass:event.target.value}))}></input>
            <button type="button" disabled={submitButtonDisabled} onClick={handleSubmission}>Sign up</button>
     </div> 

        </div>
    );
}
export default SignUpForm;