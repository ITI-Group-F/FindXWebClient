import "./App.css";
import React, { lazy, useState, Suspense } from "react";
import useToken from "./hooks/useToken";
import { Routes, Route, Link, Router } from "react-router-dom";
import NotFound from "./components/NotFound";
import Navbar from "./components/layout/NavBar/Navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Post from "./components/post/post";
import Profile from "./components/profile/profile";
import Items from "./components/Items/items";
import ItemDetailsPage from "./pages/ItemDetails";
import Loading from "./pages/Loading";
import BackTop from "./components/BackTop/BackTop";
import RenderItems from "./components/Items/allItems";
import MyAds from "./components/myads/myads";

// Modules
import AuthModule from "./modules/AuthModule";
import ChatModule from "./modules/ChatModule";
import useClaims from "./hooks/useClaims";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";
import SubAndSuperItems from "./components/Items/subAndSuperItems";
import SearchResults from "./components/Items/searchResults";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BackTop />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<ItemDetailsPage />} />
          <Route path="auth/*" element={<AuthModule />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="post"
            element={
              <PrivateRoute>
                {" "}
                <Post />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                {" "}
                <Profile />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="chat/*"
            element={
              <PrivateRoute>
                {" "}
                <ChatModule />{" "}
              </PrivateRoute>
            }
          />
          <Route path="/supercategory/:superKey" element={<SubAndSuperItems/>} />
          <Route path="/subcategory/:subKey" element={<SubAndSuperItems/>} />
{/*           <Route path="/search/:wordEntered" element={<SearchResults />} />
 */}          <Route path="items" element={<Items />} />
          <Route path="details/:id" element={<ItemDetailsPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="myads" element={<MyAds />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;