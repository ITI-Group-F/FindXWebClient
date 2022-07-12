import React, { useContext } from "react";
import "./Messenger.scss";
import { useState, useEffect, useRef, } from "react";
import ChatContext from "../../Contexts/ChatContext";

export default function Messenger() {
  const { conversations, connection, userId: ownerId,upDateChatData } = useContext(ChatContext);
  const [withId, setWithId] = useState(null);
  const [message, setMessage] = useState(<>You have no Messages</>);
  const [msgs, setMsgs] = useState(null);
  const OtherIdRef = useRef()
  const [OtherFullName, seOtherFullName] = useState("User");
  const chatRef = useRef(null);
  const currentContactRef = useRef([]);
  let prevContactRef = useRef(null);
  const MessageToSendRef = useRef(null);

const handleReceiveMessage=(sender, message)=>{

  let msg;



       if(OtherIdRef.current == sender) {
        msg = <div className="bubble you">{message}</div>;
        setMsgs((mesgs)=>[...mesgs, msg]);
        chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
        }
        else{
          
        }
        upDateChatData().then(() => {
          populateContact();
        });
       
         
}

  useEffect(() => {
    if (connection) {
      connection.on("ReceiveMessage", (sender, message) => {
        handleReceiveMessage(sender, message);
   

      });
    }
  }, [connection]);

  const sendMessage = (message) => {
    if(!withId) return;
    if (connection) {
      connection.invoke(
        "SendMessageToGroupAsync",
        ownerId,
        withId,
        message
      );
    

      let msg = <div className="bubble me">{message}</div>;
            setMsgs((mesgs)=>[...mesgs, msg]);

           prevContactRef.current.querySelector(".preview").innerText=message;
    }
  };

  let populateContact = () => {
    return conversations.map((conv, index) => {

      let SenderFullName;
      if (conv.receiver.id === ownerId) {
        SenderFullName = conv.sender.firstName + " " + conv.sender.lastName;
      } else {
        SenderFullName = conv.receiver.firstName + " " + conv.receiver.lastName;
      }

      let lastMessage = conv.messages[conv.messages.length - 1];
      let lastMessageTime = lastMessage.sendDate.split("T")[1].slice(0, 5);

      return (
        
          <li
            key={conv.id}
            ref={(element) => { currentContactRef.current[index] = element }}
            onClick={() => {
              if (prevContactRef.current != null) {
                prevContactRef.current.classList.remove("active");
              }
              prevContactRef.current = currentContactRef.current[index];

              populateChat(conv);
              currentContactRef.current[index].classList.add("active");
            }}
            className="person"

          >
            <img src="/img/av.png" alt="" />
            <span className="name">{SenderFullName}</span>
            <span className="time">{lastMessageTime}</span>
            <span className="preview">{lastMessage.content}</span>
          </li>
       
      );
    });
  };

  const setMessageValue = (e) => {
    setMessage(e.target.value);

  };

  let activateChat = () => {
    if (chatRef.current) {
      chatRef.current.classList.add("active-chat");
    }

    //currentContactRef.current.classList.add("active")

    // chat.current = chat.container.querySelector('.active-chat')
    // chat.person = chatRef.current.getAttribute('data-chat')
    // chat.current.classList.remove('active-chat')
    // chat.container.querySelector('[data-chat="' + chat.person + '"]').classList.add('active-chat')
    // friends.name = chatRef.current.querySelector('.name').innerText
    // chat.name.innerHTML = friends.name
  };

  /**
   * @param {convs[0]} conv
   * @returns
   */
  let populateChat = (conv) => {
 
    let OwnerisTheSender = true;
    if (ownerId === conv.sender.id) OwnerisTheSender = true;
    else OwnerisTheSender = false;
    let Other = OwnerisTheSender ? conv.receiver : conv.sender;

    setWithId(Other.id);
    OtherIdRef.current = Other.id;
    let otherFullName = Other.firstName + " " + Other.lastName;
    // let lastMessage = conv.messages[conv.messages.length - 1];
    // let lastMessageTime = lastMessage.sendDate.split("T")[1].slice(0,5);

    let toLoadMsgs = conv.messages.map((msg) => {
      if (ownerId === msg.senderId) {
        return <div key={msg.id} className="bubble me">{msg.content} </div>;
      } else {
        return <div key={msg.id} className="bubble you">{msg.content}</div>;
      }
    });
    setMsgs(toLoadMsgs);

    activateChat();
    seOtherFullName(otherFullName);
    setTimeout(() => {
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    }, 100);
 
    
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      sendMessage(message);
      MessageToSendRef.current.value = "";
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="chatcontainer">
          <div className="left">
            <div className="top">
              <input type="text" placeholder="Search" />
            </div>
            <ul className="people">{populateContact()}</ul>
          </div>
          <div className="right">
            <div className="top">
              <span>
                To: <span className="name">{OtherFullName}</span>
              </span>
            </div>
            <div className="chat" ref={chatRef}>
              <div className="conversation-start"></div>
              {msgs}
            </div>

            <div className="write">
              <input
                ref={MessageToSendRef}
                onChange={setMessageValue}
                onKeyPress={handleEnter}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
