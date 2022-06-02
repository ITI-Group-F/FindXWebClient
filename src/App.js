import './App.css';
import React, { useState } from 'react';
import { NativeBaseProvider, Heading } from "native-base";
import Login from './components/auth/Login';
import useToken from './hooks/useToken';
import { Routes, Route, Link } from "react-router-dom";

import Register from './components/auth/Register';
import NotFound from './components/NotFound';
import Navbar from './components/layout/NavBar/Navbar';
function App() {
  const { token, setToken } = useToken();

  /**
   * if token is not set, show login screen
   */
  // if (!token) {
  //   return (
  //     <NativeBaseProvider>
  //       <Login setToken={setToken} />
  //     </NativeBaseProvider>
  //   );
  // }

  /**
  * if token is set, then we can render the app
  */
  return (
    <NativeBaseProvider>
      <Heading>Hello React. We Come in Peace 👽</Heading>
      <Navbar></Navbar>
      <Routes>
       
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route path="register" element={<Register setToken={setToken} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </NativeBaseProvider>
  );
}

export default App;
