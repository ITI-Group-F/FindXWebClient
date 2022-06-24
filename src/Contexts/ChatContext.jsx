import React, { createContext, useMemo, useEffect, useState } from "react";
import API from "../Services/api";
import { converstions } from "../components/Chat/chatdummydata";
import { HubConnectionBuilder } from "@microsoft/signalr";

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  let ownerId = "ab34115c-bd2f-4ec2-abbc-c5646cd62ecb";
  const [connection, setConnection] = useState(null);
  let [conversations, setConversations] = useState(converstions);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        let userId = "ab34115c-bd2f-4ec2-abbc-c5646cd62ecb";
        const response = await API.get(`/chathistory/${userId}`);
        console.log(response.data[0]);
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
        signalRConnection.invoke("CreatePrivateGroupForUserAsync", ownerId)
      )
      .then(() => {
        setConnection(signalRConnection);
      });
  }, []);

  const contextValue = useMemo(
    () => ({
      conversations,
      connection,
      ownerId,
    }),
    [connection, ownerId, conversations]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContext;
export { ChatContextProvider };
