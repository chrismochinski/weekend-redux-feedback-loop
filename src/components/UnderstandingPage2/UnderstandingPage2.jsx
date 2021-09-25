import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding({ feedbackObject }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const sendToPage3 = () => {
        history.push('/page3');
    }


    let [understanding, setUnderstanding] = useState('');

    const submitUnderstanding = (event) => {
        event.preventDefault();
        if (1 <= understanding && 10 >= understanding) {
            feedbackObject.understanding = understanding;
            console.log('feedbackObject is now:', feedbackObject);
            dispatch({ type: 'ADD_UNDERSTANDING', payload: understanding })
            sendToPage3();
        }
        else {
            alert("You must enter a value between 1 and 10")
            clearUnderstanding();
            return;
        }
    }
    const clearUnderstanding = () => {
        setUnderstanding('');
    }

    return (
        <div>
            <h1>PAGE 2 - How well are you understanding the content?</h1>
            <form onSubmit={submitUnderstanding}>
                <input className="numberInput" onChange={(event) => setUnderstanding(event.target.value)}
                    value={understanding}
                    type="number"
                    placeholder='1 - 10'
                /> 
                
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Understanding;