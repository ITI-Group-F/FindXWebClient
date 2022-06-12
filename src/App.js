import './App.css';
import React, { useState } from 'react';
import Login from './components/auth/Login';
import useToken from './hooks/useToken';
import { Routes, Route, Link, Router } from "react-router-dom";

import Register from './components/auth/Register';
import NotFound from './components/NotFound';
import Navbar from './components/layout/NavBar/Navbar';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Post from './components/post/post';

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
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<><div>This is Home page</div><img src='https://pbs.twimg.com/media/CcKZlndUkAA0ziF.jpg' /></>} />
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route path="register" element={<Register setToken={setToken} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
         <Route path="post" element={<Post />} />
      </Routes>
    </>
    // <div>
    // <About />
    // <Contact />
    // </div>
  );
}

export default App;
