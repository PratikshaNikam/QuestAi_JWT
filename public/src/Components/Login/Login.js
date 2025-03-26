import "./Login.css";
import quesImage from "../../assets/QuesLogo 1.png";
import quesImage2 from "../../assets/QuesLogo_2.png"
//import maskImage from "../../assets/Mask group.png";
import googleIcon from "../../assets/google.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("")
  const navigate=useNavigate();
  
  const handleLogin = async(e) => {
    e.preventDefault();

    try { 
      const {data} = await axios.post("http://localhost:4000/login", {
        email: email,
        password: password,
      });
    }
    catch (error) {
      console.log(error);
    }
    // axios.post("http://localhost:4000/login", {
    //   email: email,
    //   password: password,
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //navigate("/newProject");
  }

  const handleRegister = async(e) => {
    e.preventDefault();
    navigate("/register")
  }

  return (
    <>
      <div className="Container">
        <div className="SubContainer1">
          <img className="Img" alt="ques_img" src={quesImage} />

          <p className="Intro">Your Podcast <br />will no longer <br />be just a hobby.</p>
          <p className="SubIntro">SuperCharge Your Distribution <br/>using our AI assistant! </p>
        </div>



        <div className="SubContainer2">
          <img className="Img2" alt="ques_img2" src={quesImage2} />
          <p className="Text1">Welcome to</p>
          <p className="Text2">Ques.AI</p>
          <input className="Email" placeholder="Email Address" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
          <input className="Password" placeholder="Password" value={password} onChange={(e)=>{setPassWord(e.target.value)}}></input>

          <div className="SubContainer3">
            <label className="RememberText">
            <input type="checkbox"></input>
              Remember me
            </label>

            <a href="#" className="ForgotPassword"> Forgot password?</a>
          </div>

          <button className="Button" onClick={handleLogin}>Login</button>

          <button className="Button1"><img className="GoogleImage" alt="googleIcon" src={googleIcon}></img><p className="googleButton">Continue with Google</p></button>

          <p className="RememberText" >Don't have an account?

            <Link to="/register" >Create account</Link>
            </p>
          
          
        </div>
      </div>
    </>
  )
  
}

export default Login;