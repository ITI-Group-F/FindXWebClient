import React, { createContext, useMemo, useEffect, useState } from "react";
import API from "../Services/api";
import { converstions } from "../components/Chat/chatdummydata";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { getCurrentUserId } from "../Services/UserService";
import useClaims from "../hooks/useClaims";

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const { userId } = useClaims();
  // let userId = getCurrentUserId();
  const [connection, setConnection] = useState(null);
  let [conversations, setConversations] = useState(converstions);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await API.get(`/chathistory/${userId}`);
        setConversations(response.data);
      } catch (error) {
        console.log(error);
        setConversations(converstions);
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
    }),
    [connection, userId, conversations]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContext;
export { ChatContextProvider };
