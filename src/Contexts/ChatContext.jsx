import React, { createContext, useMemo, useEffect, useState } from "react";
import API from "../Services/api";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { getCurrentUserId } from "../Services/UserService";
import useClaims from "../hooks/useClaims";
import { countNotifications } from "../Services/chatService";

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const { userId } = useClaims();
  // let userId = getCurrentUserId();
  const [connection, setConnection] = useState(null);
  let [conversations, setConversations] = useState([]);
  const [numberOfNotifications, setNumberOfNotifications] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await API.get(`/chathistory/${userId}`);
        setConversations(response.data);
        setNumberOfNotifications(countNotifications(response.data, userId));
      } catch (error) {
        console.log(error);
        setConversations([]);
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
      numberOfNotifications
    }),
    [connection, userId , conversations, numberOfNotifications]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContext;
export { ChatContextProvider };
