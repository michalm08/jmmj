import React from "react";
import "./scss/main.css";
import Nav from "./components/Nav";
import Introduction from "./components/Introduction";
import Content from "./components/Content";
function App() {
  return (
    <div className='App'>
      <Nav />
      <Introduction/>
      <Content/>
      
    </div>
  );
}

export default App;
