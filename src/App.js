import './App.css';
import { NativeBaseProvider, Heading } from "native-base";

function App() {
  return (
    <NativeBaseProvider>
      <Heading>Hello React. We Come in Peace 👽</Heading>
    </NativeBaseProvider>
  );
}

export default App;
