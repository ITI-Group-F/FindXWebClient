import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import axios from "./Services/api";
import { ItemsProvider } from "./Contexts/itemsContext";

import { ThemeProvider } from '@mui/material/styles';
import { defaultlight } from './theming/default';
import { SubAndSuperData } from "./Contexts/subAndsuperContext";
import { SearchProvider } from "./Contexts/SearchContext";
import { AuthContextProvider } from "./Contexts/AuthContext";
import { ImageSearchProvider } from "./Contexts/ImageSearchContext";
import { ChatContextProvider } from "./Contexts/ChatContext";

axios.interceptors.request.use(
    function(config) {
       // Do something before request is sent
        const token=sessionStorage.getItem("token")?.replaceAll('"', '');
        if(token){

            config.headers.Authorization = `Bearer ${token}`;
        }
	
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
    <BrowserRouter >
    <ItemsProvider >
    <SubAndSuperData >
    <AuthContextProvider >
    <SearchProvider>
    <ImageSearchProvider >
    <ChatContextProvider >
    <ThemeProvider theme = { defaultlight } >
    <App />
    </ThemeProvider>
    </ChatContextProvider>
    </ImageSearchProvider>
    </SearchProvider>
    </AuthContextProvider>
    </SubAndSuperData>
    </ItemsProvider> 
    </BrowserRouter> 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();