import "./Message.css"
import {Link } from "react-router-dom";
const Message=()=>{
    
    return (
        <div className="free">
        <div className="msg" >Create A Free <br/>Account</div>
        <div className="rightbtn">
          <h5>Already have an Account?</h5>
          <Link to="/">
            <button type="submit" >Sign In</button>
          </Link>
        </div>

        </div>
        
        
       
    );
}
export default Message;