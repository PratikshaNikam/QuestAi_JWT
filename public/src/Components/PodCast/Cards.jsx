import Modal from 'react-modal';
import { useState } from 'react';
const Cards = ({ name, data, image }) => {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("");
  const [name1, setName1] = useState("");

  const handleOpen = () => {
    setIcon(image);
    setName1(name)
    setOpen(true);
  };
  console.log(icon,name1)
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      
      
      <div className="Card" onClick={handleOpen} >
        <div className="Card-subContainer">
        <h2>{Object.values(name)}</h2>
        <p style={{color:"#808080"}}>{Object.values(data)}</p>
        </div>
        <img width="60vw" src={image}></img>

        
      </div>
      
      <Modal isOpen={open} onClose={handleClose} className="Modal-container">
        <>
          <header className='header-container'>
            <div className="header-subContainer">
            <img src={icon} style={{ width: "2vw" ,height:"2vw" }} alt="image"></img>
            <p style={{fontSize:"1.5vw",fontWeight:"bold", color:"#000000", marginLeft:"1vw" }}>Upload from {name1 }</p>
            </div>

            <ion-icon name="close-outline" style={{color:"#000000",cursor:"pointer"}} onClick={handleClose}></ion-icon>
            
          </header>    

          <label>
            Name
          </label>
          
          <input type="text" style={{width:"35vw",height:"2vw"}}  />
          
          <label>Transcript</label>
          <input type="text" style={{ width: "35vw", height: "7vw" }} />

          <button className='upload-button'>Upload</button>
          
                                  
        </>
      </Modal>
      
      
    
    </>
    
  )
}
export default Cards;