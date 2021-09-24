import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
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

      <Header />
      <FeelingPage1 feedbackObject={feedbackObject} />
      <UnderstandingPage2 feedbackObject={feedbackObject} />

    </div>






  );
}

export default App;
