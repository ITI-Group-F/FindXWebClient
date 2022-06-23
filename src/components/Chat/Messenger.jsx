import React from "react";
import "./Messenger.scss";
import {converstions} from './chatdummydata';
import {useState,useEffect,useRef} from 'react';



export default function Messenger(props) {
let [loadedChat,setLoadedChat] = useState(<>You have no Messages</>);
let [OtherFullName,seOtherFullName] = useState("User");
let chatRef = useRef(null);
let currentContactRef= useRef(null);
let prevContactRef= useRef(null);

let [convs,setconvs] = useState(converstions)
useEffect(()=>{
    
},[])

    let populateContact = ()=>{
   return convs.map((conv)=>{
    
   let SenderFullName = conv.receiver.firstName + " " + conv.receiver.lastName; 
   let lastMessage = conv.messages[conv.messages.length - 1];
   let lastMessageTime = lastMessage.sendDate.split("T")[1].slice(0,5);
   
   return (
    <li ref={currentContactRef} onClick={()=>{populateChat(conv)}} className="person" data-chat="perosn1" key={conv._id}>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
    <span className="name">{SenderFullName }</span>
    <span className="time">{lastMessageTime}</span>
    <span className="preview">{lastMessage.content}</span>
   </li>
   )
    })
    }

    let activateChat = ()=>{


       chatRef.current.classList.add('active-chat')
       //currentContactRef.current.classList.add("active")
  
        // chat.current = chat.container.querySelector('.active-chat')
        // chat.person = chatRef.current.getAttribute('data-chat')
        // chat.current.classList.remove('active-chat')
        // chat.container.querySelector('[data-chat="' + chat.person + '"]').classList.add('active-chat')
        // friends.name = chatRef.current.querySelector('.name').innerText
        // chat.name.innerHTML = friends.name

    }

/**
 * @param {convs[0]} conv 
 * @returns 
 */
    let populateChat = (conv)=>{
       
        let OwnerisTheSender = true;
        if (props.OwnerId === conv.sender._id) OwnerisTheSender = true; 
        else OwnerisTheSender = false;  
        let  Other  = OwnerisTheSender? conv.receiver:conv.sender; 
        console.log(Other);
        let otherFullName = Other.FirstName + " " + Other.LastName; 
        // let lastMessage = conv.messages[conv.messages.length - 1];
        // let lastMessageTime = lastMessage.sendDate.split("T")[1].slice(0,5);

     let msgs =  conv.messages.map((msg)=>{

        if (props.OwnerId === msg.senderId) {
         return(
         <div className="bubble me">
         {msg.content}
         </div>
       )
        } else {
         return(
             <div className="bubble you">
             {msg.content}
             </div>
           )
        }

     }) 
    let chatToLoad =(
            <div className="chat" data-chat={conv._id} ref={chatRef}>
                <div className="conversation-start">
                {/* <span>Today, 6:48 AM</span> */}
                </div>
           {msgs}
          
          </div>
    
    )
   setLoadedChat(chatToLoad);
    activateChat();
    seOtherFullName(otherFullName);
        //chatRef.current.querySelector(".name").innerText= OtherFullName;
         }
     



    return (<>

<div className="wrapper">
    <div className="chatcontainer">
        <div className="left">
            <div className="top">
                <input type="text" placeholder="Search" />
              
            </div>
            <ul className="people">
                {populateContact()}
            </ul>
        </div>
        <div className="right" >
            <div className="top"><span>To: <span className="name">{OtherFullName }</span></span></div>
              {loadedChat}
            <div className="write">

                <input type="text" />

            </div>
        </div>
    </div>
</div>
    </>)
}