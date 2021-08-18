import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  let name = "Vaibhav";
  return (
    <Welcome name={name} />
  )
}


export default App;
