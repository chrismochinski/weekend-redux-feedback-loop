import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import FeelingPage1 from '../FeelingPage1/FeelingPage1.jsx'
import UnderstandingPage2 from '../UnderstandingPage2/UnderstandingPage2.jsx'

function App() {

  //IDEA master object for DB

  let feedbackObject = {};

  //idea this object will compile


  const dispatch = useDispatch();

  return (

    <div className='App'>

      <Router>


        <Header />


        <Route path='/' exact>
          <FeelingPage1 feedbackObject={feedbackObject} />
        </Route>

        <Route path='/page2' exact>
          <UnderstandingPage2 feedbackObject={feedbackObject} />
        </Route>

      </Router>

    </div>






  );
}

export default App;
