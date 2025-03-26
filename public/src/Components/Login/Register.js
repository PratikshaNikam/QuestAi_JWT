import "./Login.css";
import quesImage from "../../assets/QuesLogo 1.png";
import quesImage2 from "../../assets/QuesLogo_2.png"
//import maskImage from "../../assets/Mask group.png";
//import googleIcon from "../../assets/google.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  

  const [values,setValues]=useState({
    email:"",
    password:"",
  })
  const navigate = useNavigate();
  
  const generateError =(err)=>toast.error(err,{
    position:"bottom-right"
  })
  
  const handleRegister = async(e) => {
    
    try {
      const { data } = await axios.post("http://localhost:4000/register", {
        ...values
      }, {
        withCredentials: true,
      });
      // console.log(data);
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) {
            generateError(email);
          }
          else if (password) {
            generateError(password);
          }
        }
          else {
           navigate("/");
          }
        
      }
    }
    catch (error) {
      console.log(error);
    }
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
          <input
            className="Email" type="email" placeholder="Email Address" name="email" onChange={(e) => { setValues({ ...values, [e.target.name]: e.target.value }) }}></input>
          <input className="Password" type="password" placeholder="Password" name="password" onChange={(e)=>{ setValues({ ...values, [e.target.name]: e.target.value }) }}></input>

          

          <button className="Button" onClick={handleRegister}>Register</button>

          
          
          
        </div>
      </div>
      <ToastContainer/>
    </>
  )
  
}

export default Register;