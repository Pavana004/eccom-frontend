import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './container/LandingPage';
import RegisterForm from './container/RegisterForm';
import Login from './container/Login';
import Cart from './container/Cart';

function App() {
  return (
    <>
      
      <Router>

        <Route path="/" component={LandingPage} exact/>
        <Route path="/registerForm" component={RegisterForm} exact/>
        <Route path="/loginForm" component={Login} exact/>
        <Route path="/cart" component={Cart} exact/>

      </Router>
      
    
    </>
  );
}

export default App;
