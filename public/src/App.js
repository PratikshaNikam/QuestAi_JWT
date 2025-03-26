
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Home from './Components/Home/Home';
import PodCast from './Components/PodCast/PodCast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/podcast" element={<PodCast />} />
           
      
          
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
