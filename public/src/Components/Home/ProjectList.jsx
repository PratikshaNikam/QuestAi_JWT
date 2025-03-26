import "./ProjectList.css";
import { useState } from "react";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
 
  const [open, setOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false)
  const [inputValue, setInputValue] = useState('');
  
  const navigate = useNavigate();
 
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateProject = () => {
    if(inputValue.trim() === '') {
      setAlertVisible(true);
      setInputValue('');
    
    }
    else {
      setOpen(false);
      setInputValue('');
      setAlertVisible(false);
    }
  }
  
  const handleProjectsList = () => {
    // setProjects([...projects, { id: projects.length + 1, name: inputValue }]);
    // setInputValue('');

    navigate("/podcast")
  };
  
  return (
    <>
      <div className="Project-list-container">
        <p className="Projects">Projects</p>

        <button className="Create-button" onClick={handleOpen}><ion-icon name="add-circle-outline"></ion-icon><p className="ButtonName" >Create New Project </p></button>
        
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
        
        
      </div>
      <div className="Projects-container" onClick={handleProjectsList}>
        <div className="Projects-subContainer"><p className="Sample-text">SP</p></div>
        <div className="Projects-info">
          <div>
          <h3 style={{ color: "#7E22CE", fontSize: "2vw",fontWeight:"bold" }}>Sample Project</h3>
            <p>4 Files</p>
          </div>
          <p style={{color:"#808080"}}>Last edited a week ago</p>
        </div>
      </div>
    </>
  )
}

export default ProjectList;