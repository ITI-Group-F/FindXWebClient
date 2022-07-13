import React, { createContext, useMemo, useEffect, useState, useCallback } from "react";
import API from "../Services/api";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { getCurrentUserId, updateUserData } from "../Services/UserService";
import useClaims from "../hooks/useClaims";
import { countNotifications } from "../Services/chatService";

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  let userId =  sessionStorage.getItem("userId")
  // let userId = getCurrentUserId();
  const [connection, setConnection] = useState(null);
  let [conversations, setConversations] = useState([]);
  const [numberOfNotifications, setNumberOfNotifications] = useState(0);


  const upDateChatData = useCallback(async (id) => {
    try {
      
      if (id) {
   
       userId = id;
      }
     

      const response = await API.get(`/chathistory/${userId}`);
      setConversations(response.data);
      setNumberOfNotifications(countNotifications(response.data, userId));
      console.log(countNotifications(response.data, userId));
    } catch (error) {
      setConversations([]);
    }
  }, []);
  useEffect(() => {
    upDateChatData();
  }, []);




  useEffect(() => {
    const signalRConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7085/hubs/chat")
      .withAutomaticReconnect()
      .build();

    signalRConnection
      .start()
      .then(() =>
        signalRConnection.invoke("CreatePrivateGroupForUserAsync", userId)
      )
      .then(() => {
        setConnection(signalRConnection);
      });
  }, []);

  const contextValue = useMemo(
    () => ({
      conversations,
      connection,
      userId,
      numberOfNotifications,
      upDateChatData
    }),
    [connection, userId, conversations, numberOfNotifications, upDateChatData]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContext;
export { ChatContextProvider };
