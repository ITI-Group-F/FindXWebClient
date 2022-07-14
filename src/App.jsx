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
import Footer from "./components/Footer/Footer";
// Modules
import AuthModule from "./modules/AuthModule";
import ChatModule from "./modules/ChatModule";
import useClaims from "./hooks/useClaims";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";
import SubAndSuperItems from "./components/Items/subAndSuperItems";
import SearchResults from "./components/Items/searchResults";
import ImageResult from "./components/Items/ImageResult";
import LoggedInRoute from "./routes/LoggedInRoute";

function App() {
  return (

<>
      <Suspense fallback={<Loading />}>
        <BackTop />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<LoggedInRoute><Home /></LoggedInRoute>} />
          <Route path="search-by-img" element={<ImageResult />} />
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
          <Route
            path="myads"
            element={
              <PrivateRoute>
                {" "}
                <MyAds />{" "}
              </PrivateRoute>
            }
          />

          <Route
            path="/subandsupercategories/:superKey"
            element={<SubAndSuperItems />}
          />
          <Route
            path="/subandsupercategories/:subKey"
            element={<SubAndSuperItems />}
          />
          <Route path="/search/:wordEntered" element={<SearchResults />} />
          <Route path="items" element={<Items />} />
          <Route path="details/:id" element={<ItemDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer></Footer>
      </>
  );
}

export default App;
