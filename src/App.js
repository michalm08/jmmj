import React from 'react';
import './scss/main.css';
import Nav from './components/Nav';
import Introduction from './components/Introduction';
import MySection from './components/MySection';
function App() {
  return (
    <div className='App'>
      <Nav />
      <Introduction />
      <MySection />
    </div>
  );
}

export default App;
