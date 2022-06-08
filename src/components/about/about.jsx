import React from "react";
import "./about.css";
import logo from "./../../images/one.jpg";

function About() {
  return (
    <>
      <div class="hello">
        <div class="img-part">
          <div class="is">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-google"></i>
            <i class="fab fa-github"></i>
          </div>
          <img src={logo} alt="Logo" width={100} />;
        </div>
        <div class="content-part">
          <div class="upper">
            <h2> About US,</h2>
            <br/>
            <br/>
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
          
          <div class="clr"></div>
          {/* <div class="btns">
                    <button type="submit"><a href="#">Download Cv</a></button>
                    <button type="submit"><a href="#">Hire Me</a></button>
                </div> */}
        </div>
      </div>
    </>
    // <div className='container'>
    // <div className="about">
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
