import './CommentsPage4.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";

function Comments({ feedbackObject }) {

    const dispatch = useDispatch()
    const reduxStore = useSelector(store => store);
    const history = useHistory();

    const sendToPage5 = () => {
        history.push('/page5');
    }

    let [comments, setComments] = useState('');


    const submitComments = (event) => {
        event.preventDefault();
        feedbackObject.comments = comments;
        console.log('feedbackObject is now:', feedbackObject);
        dispatch({ type: 'ADD_COMMENTS', payload: comments });
        sendToPage5();
    }


    return (
        <div>
            <Paper className="page4" elevation={6}>
            <h1>PAGE 4 - Any comments you want to leave?</h1>
            <form onSubmit={submitComments}>
                <input className="textInput" onChange={(event) => setComments(event.target.value)}
                    type="text"
                    placeholder='Thoughts?'
                />

                <Button variant="contained" size="small" color="secondary" type="submit">Next</Button>
            </form>
            </Paper>
        </div>
    )
}

export default Comments;