import './UnderstandingPage2.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";


function Understanding({ feedbackObject }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const sendToPage3 = () => { //advances one page
        history.push('/page3');
    }

    const goBack = () => { //function goes back one page
        history.push('/');
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
                <h3>Page 2</h3>
                <h1>How well are you understanding the content?</h1>
                <form onSubmit={submitUnderstanding}>
                    <TextField className="numberInput" onChange={(event) => setUnderstanding(event.target.value)}
                        value={understanding}
                        type="number"
                        label='1 - 10'
                    />
                    <div className="nextButton">
                        <Button variant="contained" size="small" color="secondary" type="submit">Next<BsFillCaretRightFill /></Button>
                    </div>
                    <div className="prevButton">
                        <Button className="prevButton" variant="contained" size="small" color="secondary" onClick={() => goBack()}><BsFillCaretLeftFill />Prev</Button>
                    </div>
                   
                </form>
            </Paper>
        </div>
    )
}

export default Understanding;