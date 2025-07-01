import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component/Style.css"
import Hero from './component/Hero';
import Index from './component/Index';
import Submerch from './component/Submerch';
import Sponsorslogo from './component/Sponsorslogo';
import Caption from './component/Caption';
import Recentvedios from './component/Recentvideos';
import Login from './component/Login';
import Signup from './component/Signup';
import News from './component/News';
function App() {


  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', paddingLeft:'10px',paddingRight:'20px'}}>
      <Routes>
    <Route 
          path="/" 
          element={
            <>
              <Index />
              <Hero />
              <Submerch />
              <Sponsorslogo />
              <Caption />
              <Recentvedios />
            </>
          } 
        />
 
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="news" element={<News/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
