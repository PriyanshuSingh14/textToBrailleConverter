import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import SignIn from "./LogInpage/SignIn/SignIn.js";
import SignUp from "./LogInpage/SignUp/SignUp.js";
import Page from "./components/Page";
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/Page" element={<Page/>}/>
         
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
