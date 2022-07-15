import React, { useContext } from "react";
import "./Messenger.scss";
import { useState, useEffect, useRef, } from "react";
import ChatContext from "../../Contexts/ChatContext";
import { setLastMessageAsSeen } from "../../Services/chatService";
import { useCallback } from "react";
import { HubConnection } from "@microsoft/signalr";

export default function Messenger() {
  /** @type {{connection:HubConnection}}  */
  const { conversations, connection, userId: ownerId, upDateChatData, PosterDetails, setNumberOfNotifications } = useContext(ChatContext);
  const [withId, setWithId] = useState(null);
  const [message, setMessage] = useState(<>You have no Messages</>);
  const [msgs, setMsgs] = useState(null);
  const OtherIdRef = useRef()
  const [OtherFullName, seOtherFullName] = useState("User");
  const chatRef = useRef(null);
  const currentContactRef = useRef([]);
  let prevContactRef = useRef(null);
  const MessageToSendRef = useRef(null);
  const isFirstConv = useRef(true);
  const [isNewConversation, setIsNewConversation] = useState(false);
  const lastConnection = useRef(connection);

  const handleReceiveMessage = useCallback( (sender, message) => {

    let msg;
    if (OtherIdRef.current == sender) {
      msg = <div key={Math.random()} className="bubble you">{message}</div>;
      setMsgs((mesgs) => [...mesgs, msg]);
      setTimeout(() => {
        chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
      }, 100);
    }
    else {

    }
    upDateChatData().then(() => {
      populateContact();
    });
  }, []);


  const hasOldChat = (id) => {
    console.log(conversations);
    for (let i = 0; i < conversations.length; i++) {
      if (conversations[i].receiver.id == id || conversations[i].sender.id == id) {
        return [true, conversations[i], i];
      }
    }
    return [false, null, null];
  };

  // const addNewContactConversation = (toId) => {
  //   let newConversation = {
  //     id: null,
  //     sender: {
  //       id: ownerId,
  //     },
  //     receiver: {
  //       id: toId,
  //     },
  //     messages: [
  //     ],
  //   }
  //   conversations.push(newConversation);
  // };

  //handling start of chat
  useEffect(() => {
    if (PosterDetails.id) {
      const isOldChat = hasOldChat(PosterDetails.id);
      if (!isOldChat[0]) {
        setWithId(PosterDetails.id);
        setMsgs([<>
          You are starting new Conversation with <b>{PosterDetails.fullName}</b> Please Say Something
          <br />
          <img style={{ width: 500, marginLeft: 150, marginTop: 20 }}
            src="https://marketing-assets.wheniwork-production.com/2020/08/11105808/updated-homepage-hero-optimized.svg" alt="Italian Trulli"></img>
        </>]);
        seOtherFullName(PosterDetails.fullName);
        chatRef.current.classList.add("active-chat");
        setIsNewConversation(true);
      } else {
        populateChat(isOldChat[1]);
        currentContactRef.current[isOldChat[2]].classList.add("active");
        prevContactRef.current = currentContactRef.current[isOldChat[2]];
      }
    }
  }, [PosterDetails]);


  useEffect(() => {

// if (  lastConnection.current) {
//   lastConnection.current.stop();
// }
    if (connection) {
      connection.on("ReceiveMessage", (sender, message) => {
        handleReceiveMessage(sender, message);
        console.log(connection.connectionId,"ReceiveMessage", message);
      });
      lastConnection.current = connection;
      
    }
  }, [connection]);

  const sendMessage = (message) => {
    console.log(withId);
    console.log(connection);
    if (!withId) return;
    if (connection) {
      connection.invoke(
        "SendMessageToGroupAsync",
        ownerId,
        withId,
        message
      );

      if (isFirstConv.current && PosterDetails.id) {
        isFirstConv.current = false;
        setMsgs([]);
        upDateChatData().then(() => {
          populateContact();
        });
      }
      else {
        prevContactRef.current.querySelector(".preview").innerText = message;
      }

      let msg = <div key={Math.random()} className="bubble me">{message} </div>;
      setMsgs((mesgs) => [...mesgs, msg]);

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
    console.log(conv);
    if (conv.messages[conv.messages.length - 1].seen === false) {
      setLastMessageAsSeen(connection, ownerId, conv.id)
      conv.messages[conv.messages.length - 1].seen = true;
      setNumberOfNotifications(prevCount => {
        if (prevCount > 0) {
          return prevCount - 1;
        }
      });
    }
  };


  const handleEnter = (event) => {
    if (event.key === "Enter") {
      sendMessage(message);
      MessageToSendRef.current.value = "";
      setTimeout(() => {
        chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
      }, 100);

      if (isNewConversation) {
        setIsNewConversation(false);
        upDateChatData().then(() => {
          populateContact();
          // currentContactRef.current[conversations.length - 1].classList.add("active");
          // prevContactRef.current = currentContactRef.current[conversations.length - 1];
        });
      }
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

