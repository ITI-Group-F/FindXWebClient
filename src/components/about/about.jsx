import React from "react";
import "./about.css";
import logo from "./../../images/one.jpg";

function About() {
  return (
    <>
       {/* <!-- Start protofolio Section --> */}

<div className="protofolio paddingTopBottom">
    <div className="container" id="protofolio">
        <h2>Our Portfolio</h2>
        <div className="protoButtons">
            <button>ALL</button>
            <button>GRAPHIC</button>
            <button>WEB DESIGN</button>
            <button>BRANDING</button>
        </div>
        <div className="protoImages">
<p>
A person cannot live alone in this world,  and that's why no
              matter how much he tries to rely on himself,  he will not be
              able to dispense with seeking help from others  in many matters
              of his life, regardless of his financial and health level,  and
              since a person from childhood begins his life by relying on others
              ,  He will also end it by relying on others,  and also the
              same thing in the middle stage of life,  i.e. the stage of
              youth,  as a person, will not be able to achieve success 
              unless he is supported by others in that.  this is the application
              to help people,  we took a lot of time to think about how to help
              people..  we found this is a great way to help people to find
              lost things
</p>
           
            
        </div>
    </div>
</div>

{/* <!-- Start protofolio Section --> */}

{/* <!-- Start facts Section --> */}

<div className="facts paddingTopBottom">
    <div className="container">
        <div className="item">
            {/* <i className="fas fa-users"></i> */}
            <h3>Hanan</h3>
                <h5>hananelzftawy1999@gmail.com</h5>
                
        </div>
        <div className="item">
            {/* <i className="far fa-copy"></i> */}
            <h3>ahmedelgohary</h3>
                <h5>ahmedelgohary3394@gmail.com</h5>
        </div>
        <div className="item">
            <i className="fas fa-cloud-download-alt"></i>
            <h3>ehapdiab</h3>
                <h5>diab96@hotmail.com</h5>
        </div>
        <div className="item">
            <i className="fas fa-coffee"></i>
            <h3>mohab</h3>
                <h5>mohabsoft21@outlook.com</h5>
        </div>
        <div className="item">
            <i className="fas fa-coffee"></i>
            <h3>mohamedbibers</h3>
                <h5>mohamedbibers2556@gmail.com</h5>
        </div>
        <div className="item">
            <i className="fas fa-coffee"></i>
            <h3>Abdullahelzayat</h3>
                <h5>Abdullahelzayat23@outlook.com</h5>
        </div>
        <div className="item">
            <i className="fas fa-coffee"></i>
            <h3>mohamed yousry</h3>
                <h5>odsh97@gmail.com</h5>
        </div>

    </div>
</div>


{/* <!-- End facts Section --> */}
          
          
          {/* <div className="btns">
                    <button type="submit"><a href="#">Download Cv</a></button>
                    <button type="submit"><a href="#">Hire Me</a></button>
                </div> */}
        
    </>
    // <div classNameName='container'>
    // <div classNameName="about">
    //   <h2>about us</h2>
    //   <p>A person cannot live alone in this world,
    //     and that is why no matter how much he tries to rely on himself,
    //     he will not be able to dispense with seeking help from others
    //     in many matters of his life, regardless of his financial and health level,
    //     and since a person from childhood begins his life by relying on others ,
    //     He will also end it by relying on others,
    //     and also the same thing in the middle stage of life,
    //     i.e. the stage of youth,
    //     as a person will not be able to achieve success
    //     unless he is supported by others in that.
    //     this is application to help people ,
    //     we took alot of time to think how to help people..
    //     we found this is great way to help people to find losing things

    //   </p>

    // </div>
    //  </div>
  );
}

export default About;
