import './UnderstandingPage2.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";

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
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Please enter a value between from 1 to 10.',
              })
            clearUnderstanding();
            return;
        }
    }
    const clearUnderstanding = () => {
        setUnderstanding('');
    }

    return (
        <div>
            <Paper className="page2" elevation={6}>
                <h1>PAGE 2 - How well are you understanding the content?</h1>
                <form onSubmit={submitUnderstanding}>
                    <input className="numberInput" onChange={(event) => setUnderstanding(event.target.value)}
                        value={understanding}
                        type="number"
                        placeholder='1 - 10'
                    />

                    <Button variant="contained" size="small" color="secondary" type="submit">Next</Button>
                </form>
            </Paper>
        </div>
    )
}

export default Understanding;