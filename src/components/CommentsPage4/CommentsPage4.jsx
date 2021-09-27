import './CommentsPage4.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { animated, useSpring } from "react-spring";


function Comments({ feedbackObject }) {

    const dispatch = useDispatch()
    const reduxStore = useSelector(store => store);
    const history = useHistory();

    const sendToPage5 = () => { //advances one page
        history.push('/page5');
    }

    const goBack = () => { //goes back one page
        history.push('/page3');
    }

    let [comments, setComments] = useState('');


    const submitComments = (event) => {
        event.preventDefault();
        feedbackObject.comments = comments;
        console.log('feedbackObject is now:', feedbackObject);
        dispatch({ type: 'ADD_COMMENTS', payload: comments });
        sendToPage5();
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
                <Paper className="page4" elevation={6}>
                    <h3>Page 4</h3>
                    <h1>Any comments you want to leave?</h1>
                    <br />
                    <form onSubmit={submitComments}>
                        <TextField className="textInput" onChange={(event) => setComments(event.target.value)}
                            type="text"
                            label='Comments:'
                        />
                        <div className="nextButton">
                            <Button variant="contained" size="small" color="secondary" type="submit">Next<BsFillCaretRightFill /></Button>
                        </div>
                        <div className="prevButton">
                            <Button className="prevButton" variant="contained" size="small" color="secondary" onClick={() => goBack()}><BsFillCaretLeftFill />Prev</Button>
                        </div>
                    </form>
                </Paper>
            </div >
        </animated.div>
    )
}

export default Comments;