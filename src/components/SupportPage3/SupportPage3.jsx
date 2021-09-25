import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support({ feedbackObject }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const sendToPage4 = () => {
        history.push('/page4');
    }   //fix check!!

    let [support, setSupport] = useState('');

    const submitSupport = (event) => {
        event.preventDefault();
        if (1 <= support && 10 >= support) {
            feedbackObject.support = support;
            console.log('feedbackObject is now:', feedbackObject);
            dispatch({ type: 'ADD_SUPPORT', payload: support })
            sendToPage4();
        }
        else {
            alert("You must enter a value between 1 and 10")
            clearSupport();
            return;
        }
    }
    const clearSupport = () => {
        setSupport('');
    }

    return (
        <div>
            <h1>PAGE 3 - How well are you being supported?</h1>
            <form onSubmit={submitSupport}>
                <input onChange={(event) => setSupport(event.target.value)}
                    value={support}
                    type="number"
                    placeholder='1 - 10'
                /> 
                
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Support;