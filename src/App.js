import './App.css';
import { NativeBaseProvider, Heading } from "native-base";
import Login from './components/auth/Login';

function App() {
  return (
    <NativeBaseProvider>
      <Heading>Hello React. We Come in Peace 👽</Heading>
      <Login />
    </NativeBaseProvider>
  );
}

export default App;
