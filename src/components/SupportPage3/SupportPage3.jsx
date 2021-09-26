import './SupportPage3.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '@mui/material/Button'; 
import Paper from "@material-ui/core/Paper"; 

function Support({ feedbackObject }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const sendToPage4 = () => {
        history.push('/page4');
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
              })
            clearSupport();
            return;
        }
    }
    const clearSupport = () => {
        setSupport('');
    }

    return (
        <div>
            <Paper className="page3" elevation={6}>
            <h1>PAGE 3 - How well are you being supported?</h1>
            <form onSubmit={submitSupport}>
                <input className="numberInput" onChange={(event) => setSupport(event.target.value)}
                    value={support}
                    type="number"
                    placeholder='1 - 10'
                /> 
                
                <Button variant="contained" size="small" color="secondary" type="submit">Next</Button>
            </form>
            </Paper>
        </div>
    )
}

export default Support;