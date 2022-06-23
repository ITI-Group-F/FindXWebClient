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
import Profile from './components/profile/profile'
import Footer from './components/Footer/Footer';            //footer
import Items from './components/Items/items'

import ItemDetailsPage from "./pages/ItemDetails"
import Messenger from './components/Chat/Messenger';
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

        <Route path="/" element={<ItemDetailsPage />} />
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route path="register" element={<Register setToken={setToken} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="post" element={<Post />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chat" element={<Messenger OwnerId="ab34115c-bd2f-4ec2-abbc-c5646cd62ecb" />} />
        <Route path="items" element={<Items />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
<ItemDetailsPage/>
    
      <Footer></Footer>

    </>


  );
}

export default App;
