import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";

const Messenger = lazy(() => import("../components/Chat/Messenger"));

const ChatModule = () => {
  return (
    <>
  
        <Routes>
          <Route path="messanger" element={<Messenger />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
 
    </>
  );
};

export default ChatModule;
