import './FeelingPage1.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";



function Feeling({ feedbackObject }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const sendToPage2 = () => { //advances one page
        history.push('/page2');
    }

    let [feeling, setFeeling] = useState('')

    const submitFeeling = (event) => {
        event.preventDefault();
        if (1 <= feeling && 10 >= feeling) {
            feedbackObject.feeling = feeling;
            console.log('feedbackObject is now:', feedbackObject);
            dispatch({ type: 'ADD_FEELING', payload: feeling })
            sendToPage2();
            // clearFeeling();
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Please enter a value between from 1 to 10.',
            })
            clearFeeling();
            return;
        }
    }
    const clearFeeling = () => {
        setFeeling('');
    }

    return (
        <div>
            <Paper className="page1" elevation={6}>
                <h3>Page 1</h3>
                <h1>How are you feeling today?</h1>
                <form onSubmit={submitFeeling}>
                    <TextField className="numberInput" onChange={(event) => setFeeling(event.target.value)}
                        value={feeling}
                        type="number"
                        label="1 - 10"
                    />
                    <div className="nextButton">
                        <Button variant="contained" size="small" color="secondary" type="submit">Next<BsFillCaretRightFill /></Button>
                    </div>
                    <div className="prevButton">
                        <Button className="prevButton" disabled="disabled" variant="contained" size="small" color="secondary"><BsFillCaretLeftFill />Prev</Button>
                    </div>
                </form>
            </Paper>
        </div>
    )

}

export default Feeling;