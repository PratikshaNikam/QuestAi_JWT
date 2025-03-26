
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/newProject" element={<Project />} />
        <Route path="/podcast" element={<PodCast />} /> */}
           
      
          
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
