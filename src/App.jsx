import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component/Style.css"
import Hero from './component/Hero';
import Index from './component/Index';
import Submerch from './component/Submerch';
import Sponsorslogo from './component/Sponsorslogo';
import Caption from './component/Caption';
function App() {


  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', paddingLeft:'10px',paddingRight:'20px'}}>
      <Index/>
      <Hero/>
    <Submerch/>
    <Sponsorslogo />
<Caption />
    </div>
  );
}

export default App;
