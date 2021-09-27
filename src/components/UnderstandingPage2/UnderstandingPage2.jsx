import './UnderstandingPage2.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { animated, useSpring } from "react-spring"; 


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

    const props = useSpring({
        config: {duration: 500},
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(-35px, 8px)" },
      }); 


    return (

        <animated.div style={props}>
        <div>
            <Paper className="page2" elevation={6}>
                <h3>Page 2</h3>
                <h1>How well are you understanding the content?</h1>
                <br />

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
        </animated.div>

    )
}

export default Understanding;