import './App.css';
import React, { useState } from 'react';
import { NativeBaseProvider, Heading } from "native-base";
import Login from './components/auth/Login';
import useToken from './hooks/useToken';

function App() {
  const { token, setToken } = useToken();

  /**
   * if token is not set, show login screen
   */
  if (!token) {
    return (
      <NativeBaseProvider>
        <Login setToken={setToken} />
      </NativeBaseProvider>
    );
  }

  /**
  * if token is set, then we can render the app
  */
  return (
    <NativeBaseProvider>
      <Heading>Hello React. We Come in Peace 👽</Heading>
      <Login setToken={setToken} />
    </NativeBaseProvider>
  );
}

export default App;
