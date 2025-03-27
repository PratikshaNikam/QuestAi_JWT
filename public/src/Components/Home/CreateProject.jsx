import groupImage from "../../assets/GroupPic.png";
import Modal from 'react-modal';
import { useState } from "react";
import "./CreateProject.css";
import ProjectList from "./ProjectList";

const CreateProject = () => {
  const [open, setOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [flag, setFlag] = useState(false);

  const handleOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleCreateProject = () => {
     if(inputValue === '') {
        setAlertVisible(true);
        setInputValue('');
        setFlag(false);
        setAlertVisible(true)
      }
      else {
        setOpen(false);
        setFlag(true);
        setInputValue('');
        setAlertVisible(false);
      }
  }
  
  return (
    <>
      {!flag?(<section className="Main-section">
        <p className="Title">Create a New Project</p>
        <img src={groupImage} alt="groupImage" className="GroupImage"></img>
        <p className="Info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

        <button  className="Create-button"  onClick={handleOpen}><ion-icon name="add-circle-outline"></ion-icon><p className="ButtonName" >Create New Project </p></button>

        <Modal isOpen={open} onClose={handleClose} className="Modal">
                <>
            <h2>Create Project</h2>
            <p>Enter Project Name:</p>
            <input type="text" placeholder="Type here" className="ProjectName" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {alertVisible && <p className="EmptyAlert" >Project Name Can't be empty</p>}
            
            
            <div className="Button-container">
              <button className="Cancel" onClick={handleClose}>Cancel</button>
              <button className="Create" onClick={handleCreateProject}>Create</button>
            </div>
                    
                </>
            </Modal>

      </section>):(<ProjectList />)}
    
      </>
  )
}
export default CreateProject;
