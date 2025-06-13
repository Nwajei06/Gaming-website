import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component/Style.css"
import Hero from './component/Hero';
import Index from './component/Index';
function App() {


  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', paddingLeft:'10px',paddingRight:'20px'}}>
      <Index/>
      <Hero/>

    </div>
  );
}

export default App;
