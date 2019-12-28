import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/example';
import Header from './components/header';
import logoHeader from './assets/images/Logo-Default.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header image={logoHeader}></Header>
       Component explorer
      </header>
      <div id="main">
      <Example styles={{
      backgroundColor: "#33ACFF",
        padding:"10px"
      }} buttonText="Click me"></Example>
        </div>     
    </div>
  );
}

export default App;
