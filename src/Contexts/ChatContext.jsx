import React, { createContext, useMemo, useEffect, useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import API from "../Services/api";
import { HubConnectionBuilder } from "@microsoft/signalr";
import useClaims from "../hooks/useClaims";
import { countNotifications } from "../Services/chatService";
import api from "../Services/api";

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  let userId = sessionStorage.getItem("userId")
  // let userId = getCurrentUserId();
  const [connection, setConnection] = useState(null);
  let [conversations, setConversations] = useState([]);
  const [numberOfNotifications, setNumberOfNotifications] = useState(0);
  const [PosterDetails, setPosterDetails] = useState({});
  const navigate = useNavigate();

  const upDateChatData = useCallback(async (id) => {
    try {

      if (id) {

        userId = id;
      }
      const response = await API.get(`/chathistory/${userId}`);
      setConversations(response.data);
      setNumberOfNotifications(countNotifications(response.data, userId));
     
    } catch (error) {
      setConversations([]);
    }
  }, []);
  useEffect(() => {
    upDateChatData();
  }, []);

  const handleNewChat = useCallback(async (id) => {
    api
      .get(`/Items/${id}`)
      .then((response) => {
        setPosterDetails({ id: response.data.userId, fullName: response.data.itemPosterFullName })
        navigate('/chat/messanger');
      });
  },[]);


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
      upDateChatData,
      handleNewChat,
      PosterDetails
    }),
    [connection, 
      userId, 
      conversations, 
      numberOfNotifications,
       upDateChatData,handleNewChat,
       PosterDetails]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContext;
export { ChatContextProvider };
