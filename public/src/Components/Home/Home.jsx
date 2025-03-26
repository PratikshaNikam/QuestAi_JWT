import questImage from "../../assets/QuesLogoPurple.png";
import "./Home.css";
import CreateProject from "./CreateProject";




const Home = () => {
  //console.log(open);
  
  return (
    <div>
      <header className="Header">
      <img src={questImage} alt="questImage" className="questImage"></img>
        <div className="Icon-container">
        <ion-icon name="settings-outline"></ion-icon>
          <ion-icon name="notifications-outline"></ion-icon>
        </div>

        
      </header>
      <CreateProject/>
</div>
  );
};
export default Home;