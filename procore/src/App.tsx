import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignInScreen } from "./components/auth_chakra/SignInScreen";

function App() {
  return (
    <div className="App">
      <SignInScreen />
    </div>
  );
}

export default App;
