import React from 'react';
import "./contact.css"


function Contact() {
    // console.log(<h1>hello world</h1>)
  return (
    
    <>
    <div class="about" id="about">
      <div className="team">Team Members</div>

      <div class="container">
          <div class="item">
            <h3>Hanan</h3>
            <h5>hananelzftawy1999@gmail.com</h5>
          </div>

          <div class="item">
            {/* <i class="fas fa-file-code"></i> */}
            <h3>Ahmed Elgohary</h3>
            <h5>ahmedelgohary3394@gmail.com</h5>
          </div>

          <div class="item">
            {/* <i class="fas fa-object-group"></i> */}
            <h3>Ehab Diab</h3>
            <h5>diab96@hotmail.com</h5>
          </div>

          <div class="item">
            {/* <i class="fas fa-cogs"></i> */}
            <h3>Mohab Elnajjar</h3>
            <h5>mohabsoft21@outlook.com</h5>
          </div>

          <div class="item">
            {/* <i class="fas fa-cogs"></i> */}
            <h3>Abdullah Elzayat</h3>
            <h5>abdullahelzayat23@outlook.com</h5>
          </div>
          <div className="item">
            {/* <i className="fas fa-coffee"></i> */}
            <h3>Mohamed Bibers</h3>
            <h5>mohamedbibers2556@gmail.com</h5>
          </div>
          <div className="item">
            <h3>Mohamed Yousry</h3>
            <h5>odsh97@gmail.com</h5>
          </div>
        </div>
      </div>
  </>
  )
}

export default Contact