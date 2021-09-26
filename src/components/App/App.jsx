import React, { useState } from 'react';
// import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import FeelingPage1 from '../FeelingPage1/FeelingPage1.jsx'
import UnderstandingPage2 from '../UnderstandingPage2/UnderstandingPage2.jsx'
import SupportPage3 from '../SupportPage3/SupportPage3.jsx';
import CommentsPage4 from '../CommentsPage4/CommentsPage4.jsx'
import ReviewPage5 from '../ReviewPage5/ReviewPage5.jsx'
import ThankYouPage6 from '../ThankYouPage6/ThankYouPage6.jsx'



function App() {


  // this feedbackObject is a store backup in the App scope
  let feedbackObject = {};


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

        <Route path='/page3' exact>
          <SupportPage3 feedbackObject={feedbackObject} />
        </Route>

        <Route path='/page4' exact>
          <CommentsPage4 feedbackObject={feedbackObject} />
        </Route>

        <Route path='/page5' exact>
          <ReviewPage5 feedbackObject={feedbackObject} />
        </Route>

        <Route path='/thankyou' exact>
          <ThankYouPage6 />
        </Route>

      </Router>

    </div>






  );
}

export default App;
