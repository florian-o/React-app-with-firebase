import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContextController } from "./context";

import "./App.css";





// Import Components
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Home from "./Home";
import Register from "./account/Register";
import Login from "./account/Login";





function App() {

  return (
    <div className="App">
    <ContextController>
    <Router>
     <NavBar />
     
       <Switch>
         
       <Route exact path ='/' component = {Home}/> 
        <Route exact path ='/register' component = {Register }/> 
        <Route exact path ='/login' component = {Login }/> 
      </Switch>
    <Footer/>
     </Router>
     </ContextController>
    </div>
  );

}

export default App;
