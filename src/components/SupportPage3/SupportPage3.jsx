import './SupportPage3.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { animated, useSpring } from "react-spring";


function Support({ feedbackObject }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const sendToPage4 = () => { //advances one page
        history.push('/page4');
    }

    const goBack = () => { //function goes back one page
        history.push('/page2');
    }

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
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Please enter a value between from 1 to 10.',
                from: { opacity: 0, transform: "translate(-35px, 8px)" },
            })
            clearSupport();
            return;
        }
    }
    const clearSupport = () => {
        setSupport('');
    }

    const props = useSpring({
        config: {duration: 500},
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(-30px, 30px)" },
    });


    return (
        <animated.div style={props}>
            <div>
                <Paper className="page3" elevation={6}>
                    <h3>Page 3</h3>
                    <h1>How well are you being supported?</h1>
                    <br />
                    <form onSubmit={submitSupport}>
                        <TextField className="numberInput" onChange={(event) => setSupport(event.target.value)}
                            value={support}
                            type="number"
                            label='1 - 10'
                        />
                        <div className="nextButton">
                            <Button
                                variant="contained"
                                size="small"
                                color="secondary"
                                type="submit">
                                Next
                                <BsFillCaretRightFill />
                            </Button>
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

export default Support;