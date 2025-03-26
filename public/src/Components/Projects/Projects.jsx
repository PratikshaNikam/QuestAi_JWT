import questImage from "../../assets/QuesLogoPurple.png";
import "./ProjectList.css";

const Projects = () => {
  return (
    <div>
      <header className="Header">
      <img src={questImage} alt="questImage"></img>
        <div className="Icon-container">
        <ion-icon name="settings-outline"></ion-icon>
        <ion-icon name="notifications-outline"></ion-icon>
        
      </div>
      </header>
    </div>
  );
}

export default Projects;