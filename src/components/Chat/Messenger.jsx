import React from "react";
import "./Messenger.scss";
import { converstions } from "./chatdummydata";
import { useState, useEffect, useRef } from "react";
import API from "../../Services/api";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

export default function Messenger(props) {
  const [connection, setConnection] = useState(null);
  const [message, setMessage] = useState("");
  let [loadedChat, setLoadedChat] = useState(<>You have no Messages</>);
  let [OtherFullName, seOtherFullName] = useState("User");
  let chatRef = useRef(null);
  let currentContactRef = useRef(null);
  let prevContactRef = useRef(null);

  let [convs, setconvs] = useState(converstions);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        let userId = "ab34115c-bd2f-4ec2-abbc-c5646cd62ecb";
        const response = await API.get(`/chathistory/${userId}`);
        console.log(response.data[0]);
        setconvs(response.data);
      } catch (error) {
        console.log(error);
        setconvs(converstions);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const signalRConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7085/hubs/chat")
      .withAutomaticReconnect()
      .build();

    signalRConnection
      .start()
      .then(() =>
        signalRConnection.invoke(
          "CreatePrivateGroupForUserAsync",
          props.OwnerId
        )
      )
      .then(() => {
        setConnection(signalRConnection);
      });
  }, []);

  useEffect(() => {
    if (connection) {
      connection.on("ReceiveMessage", (sender, message) => {
        alert(`${sender} says: ${message}`);
      });
    }
  }, [connection]);

  const sendMessage = (message) => {
    if (connection) {
      connection.invoke(
        "SendMessageToGroupAsync",
        props.OwnerId,
        "557e746a-694b-4dc2-80fb-fe25d6b880b6",
        message
      );
    }
  };

  let populateContact = () => {
    return convs.map((conv) => {
      let SenderFullName =
        conv.receiver.firstName + " " + conv.receiver.lastName;
      let lastMessage = conv.messages[conv.messages.length - 1];
      let lastMessageTime = lastMessage.sendDate.split("T")[1].slice(0, 5);

      return (
        <>
          <li
            ref={currentContactRef}
            onClick={() => {
              populateChat(conv);
            }}
            className="person"
            data-chat="perosn1"
            key={conv._id}
          >
            <img src="/img/av.png" alt="" />
            <span className="name">{SenderFullName}</span>
            <span className="time">{lastMessageTime}</span>
            <span className="preview">{lastMessage.content}</span>
          </li>
        </>
      );
    });
  };

  const setMessageValue = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  let activateChat = () => {
    chatRef.current.classList.add("active-chat");
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
    if (props.OwnerId === conv.sender.id) OwnerisTheSender = true;
    else OwnerisTheSender = false;
    let Other = OwnerisTheSender ? conv.receiver : conv.sender;
    console.log(Other);
    let otherFullName = Other.FirstName + " " + Other.LastName;
    // let lastMessage = conv.messages[conv.messages.length - 1];
    // let lastMessageTime = lastMessage.sendDate.split("T")[1].slice(0,5);

    let msgs = conv.messages.map((msg) => {
      if (props.OwnerId === msg.senderId) {
        return <div className="bubble me">{msg.content}</div>;
      } else {
        return <div className="bubble you">{msg.content}</div>;
      }
    });
    console.log("hit");
    let chatToLoad = (
      <div className="chat" data-chat={conv._id} ref={chatRef}>
        <div className="conversation-start">
          {/* <span>Today, 6:48 AM</span> */}
        </div>
        {msgs}
      </div>
    );
    setLoadedChat(chatToLoad);
    activateChat();
    seOtherFullName(otherFullName);
    //chatRef.current.querySelector(".name").innerText= OtherFullName;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage(message);
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
            {loadedChat}
            <div className="write">
              <input
                onChange={setMessageValue}
                onKeyPress={handleKeyPress}
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
