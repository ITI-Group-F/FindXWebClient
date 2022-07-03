import React from 'react';
import "./contact.css"


function Contact() {
    // console.log(<h1>hello world</h1>)
  return (
    
        <div className="contact paddingTopBottom" id="contact">
            <h2>Contact Us</h2>
            <div class="container">
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message for me"></textarea><br/>
                    <button type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </div>
  )
}

export default Contact