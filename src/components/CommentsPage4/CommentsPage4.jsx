import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
        dispatch({ type: 'ADD_COMMENTS', payload: comments })
        console.log('reduxStore is now:', reduxStore)
        sendToPage5();

    }
    

    return (
        <div>
            <h1>PAGE 4 - Any comments you want to leave?</h1>
            <form onSubmit={submitComments}>
                <input onChange={(event) => setComments(event.target.value)}
                    value={comments}
                    type="text"
                    placeholder='1 - 10'
                />

                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Comments;