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
import Tournaments from './component/Tournaments';
import Community from './component/Community';
import Shop from './component/Shop';
import Company from './component/Company';
function App() {


  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', paddingLeft:'10px',paddingRight:'20px'}}>
        <Index />
      <Routes>
    <Route 
          path="/" 
          element={
            <>
            
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
        <Route path="tournaments" element={<Tournaments/>}/>
        <Route path="community" element={<Community/>}/>
        <Route path="company" element={<Company/>}/>
        <Route path="shop" element={<Shop/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
