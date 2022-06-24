import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import { ChatContextProvider } from "../Contexts/ChatContext";

const Messenger = lazy(() => import("../components/Chat/Messenger"));

const ChatModule = () => {
  return (
    <>
      <ChatContextProvider>
        <Routes>
          <Route path="messanger" element={<Messenger />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChatContextProvider>
    </>
  );
};

export default ChatModule;
