import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
}from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Facilities from './pages/Facilities';
import HouseRules from './pages/House-Rules';
import ContactUs from './pages/Contact-Us';
import AboutUs from './pages/About-Us';
import FeesPayments from './pages/Fees-payments';
import NotFoundpage from './pages/NotFoundPage';
import ApplyNow from './pages/Apply-Now';

// import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <div className="App" >
        <Header />
        <div id="page-body">
      <Switch>
       <Route path="/" component={Home}  exact />
          <Route path="/home" component={Home}   />
          <Route path="/facilities" component={Facilities}  />
          <Route path="/house-rules" component={HouseRules}  />
          <Route path="/about-us" component={AboutUs}  />
          <Route path="/fees-payments" component={FeesPayments}  /> 
          <Route path="/contact-us" component={ContactUs}  /> 
          <Route path="/apply-now" component={ApplyNow}  /> 
          <Route component={NotFoundpage}  />
       </Switch> 
          
        </div>
        <Footer />
      </div>
    </Router>
  
  );
}

export default App;