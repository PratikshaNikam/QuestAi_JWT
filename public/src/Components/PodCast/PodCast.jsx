import questImage from "../../assets/QuesLogoPurple.png";
//import { useState } from 'react';
import "./PodCast.css";
import { useState } from "react";
import Cards from "./Cards";
import Modal from 'react-modal';
import Youtube from "../../assets/youtube.png";
import Feed from "../../assets/feed.png";
import Upload from "../../assets/upload.png";

const PodCast = () => {
  const [pathData, setPathData] = useState("");
  
return (
    <>
      <div className="Podcast-container">
        <div className='Left-container'>
          <img src={questImage} alt="questImage" className="questImage"></img>

          <div className="podcast-button" onClick={() => setPathData("Add your Podcast")}>
          <ion-icon name="add-outline" style={{color:"#7E22CE",width:"1.1vw", height:"1vw"}}></ion-icon>
            <p className="Podcast-title">Add your Podcast(s)</p>
          </div>

          
          
          <div className="podcast-button1">
          <ion-icon name="pencil-outline" style={{width:"1.1vw", height:"1vw"}}></ion-icon>
            <p className="Podcast-title1">Create & Repurpose</p>
          </div>
          
          <div className="podcast-button1">
          <ion-icon name="document-outline" style={{width:"1.1vw", height:"1vw"}}></ion-icon>
            <p className="Podcast-title1">Podcast Widget</p>
          </div>
          
          <div className="podcast-button1">
          <ion-icon name="diamond-outline" style={{width:"1.1vw", height:"1vw"}}></ion-icon>
            <p className="Podcast-title1">Upgrade</p>
          </div>
          
          <hr style={{ width: "15vw", marginTop: "1vw", color: "#808080" }} />
          
          <div className="podcast-button1" style={{marginTop:"13vw"}}>
          <ion-icon name="settings-outline" style={{width:"1.1vw", height:"1vw"}}></ion-icon>
            <p className="Podcast-title1">Help</p>
          </div>

          <hr style={{ width: "15vw", marginTop: "1vw", color: "#808080" }} />

          <div className="podcast-button1" >
          <ion-icon name="image-outline" style={{width:"1.1vw", height:"1vw"}}></ion-icon>
            <p className="Podcast-title1">Username</p>
          </div>

        </div>

        <div className="right-container">
          <header className="header-container">
            <div className="path-container-left">
              <ion-icon name="home-outline" style={{width:"1.2vw",margin:"0.5vw"}}></ion-icon>Home Page/Sample Project/<p style={{color:"#7719c9",fontWeight:"bold"}}>{pathData}</p>
            </div>

            <div style={{marginRight:"1vw"}}>
              <ion-icon name="notifications-circle-outline"></ion-icon>
              <ion-icon name="exit-outline" style={{color:"red"}}></ion-icon>
            </div>
            
          </header>

          <section>
            <p style={{ marginLeft:"4vw", fontSize: "2vw", fontWeight: "bold" }}>Add Podcast</p>
            <div className="Card-container">
             <Cards name="RSS Feed" data="Lorem ipsum dolor sit amet." image={Feed}  />
              <Cards name="Youtube Video" data="Lorem ipsum dolor sit amet." image={Youtube} />
              <Cards name="Upload Files" data="Lorem ipsum dolor sit amet." image={Upload} />
            </div>

            <section className="section-container">
              <ion-icon name="cloud-upload-outline" style={{ color: "#7E22CE", fontSize: "5vw" }}></ion-icon>
              <p style={{ fontSize: "1.2vw" }}>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
              <p style={{ color: "#808080" }}>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
              <button className="button-select">Select File</button>
            </section>
            

        </section>
      </div>
      </div>
        </>
  )
}

export default PodCast;