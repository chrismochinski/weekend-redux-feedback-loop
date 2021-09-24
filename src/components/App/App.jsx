import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {

  //fix page 1
  const dispatch = useDispatch();

  let [feeling, setFeeling] = useState('')

  const submitFeeling = (event) => {
    event.preventDefault();
    dispatch({type: 'ADD_FEELING', payload: feeling})
  }

  return (

    <div className='App'>

      {/* TODO move this to header component */}
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>


      {/* FIX page 1/feeling */}
      <h1>PAGE 1 - How are you feeling today?</h1>
      <form onSubmit={submitFeeling}>
        <input onChange={(event) => setFeeling(event.target.value)}
          value={feeling}
          type='number'
          placeholder='1 - 10'
        />
        <button type="submit">Submit</button>
      </form>


    </div>






  );
}

export default App;
