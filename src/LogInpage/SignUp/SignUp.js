
import "./SignUp.css";
import imgsym from "./image.jpg";
import SignUpForm from "./SignUpForm";
import Message from "./Message";
const SignUp=()=>{
    return(
      <div className="mainPage">
        <div className="OutBoxx">
        <div className="left">
          <SignUpForm/>
        </div>
        
        <img src={imgsym} alt="help_them" height="120px" width="140px"></img>
       
        <div className="righttt">
          <Message/>
        </div>
        
        </div>


      </div>
     
        
        

      
    );
}
export default SignUp;