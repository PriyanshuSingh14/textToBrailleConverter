import {Link} from "react-router-dom";
import imgsym from "./image.jpg";
import LogIn from "./LogIn.js";
import "./SignIn.css";
const SignIn = () => {
  return (
    <div className="mainPage">
      <div className="OutBoxx">
        <div className="left">
          <LogIn />
        </div>
        <img src={imgsym} alt="help_them" height="120px" width="140px"></img>
        
        <h1>WELCOME <br/>BACK</h1>
        <div className="right">
        <p>Simply Create A Free Account By Clicking The SignUp Button</p> <br/>
        <Link to="/SignUp">
        <button type="submit" >Sign Up</button>
        </Link>
        
            </div>
      </div>
      </div> 
  );
};
export default SignIn;
