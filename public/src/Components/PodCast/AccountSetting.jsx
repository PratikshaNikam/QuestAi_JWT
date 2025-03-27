import React from 'react'

export default function AccountSetting() {
  return (
    <>
      <div className="Account-container">
        <div className="Account-subContainer">
          <ion-icon name="arrow-back-outline"></ion-icon>
          <p style={{fontSize:"3vw",fontWeight:"bold"}}>Account Settings</p>
          </div>

        <div className='Account-Info'>
          <img src="https://www.dummyimg.in/placeholder" alt="profile-pic" className='Profile-pic' />
          
          <div className='Account-Info-subContainer'>
            <p>User Name</p>
            <input type="text" placeholder='dummy name' style={{borderRadius:"0.5vw"}} />
          </div>

          <div className='Account-Info-subContainer' style={{marginLeft:"2vw"}}>
            <p>Email</p>
            <input type="text" placeholder='dummy@gmail.com' style={{borderRadius:"0.5vw"}} />
          </div>
        </div>

        <p style={{ fontSize: "3vw", fontWeight: "bold" }}>Subscriptions</p>
        
        <div className='Alert-Container'> 
          <div className='Alert-SubContainer'>
          <p>Opps! You don't have any plan.</p>
          <p style={{fontWeight:"bold"}}>Upgarde now!</p>
          </div>
          

          <button className='upgrade-button'>Upgrade</button>
        </div>
        </div>
    </>
  )
}
