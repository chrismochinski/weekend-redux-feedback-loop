import './ReviewPage5.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '@mui/material/Button'; 
import Paper from "@material-ui/core/Paper"; 

function Review() {

    const dispatch = useDispatch();
    const reduxStore = useSelector(store => store.masterReducer);
    const history = useHistory();

    console.log('store is now:', reduxStore);

    const postToDatabase = () => { //conditional to avoid errors - start over if any values missing
        console.log('Info to database:', reduxStore);
        if (reduxStore.feeling === '' || reduxStore.understanding === '' || reduxStore.support === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You missed a value somewhere!",
                confirmButtonText: 'Start Over'
              })
            startOver();
        }
        else {
            axios({
                method: 'POST',
                url: '/feedback',
                data: reduxStore,
            }).then(response => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Feedback Saved!',
                    showConfirmButton: false,
                    timer: 1800
                  })
                finalPage(); // call function below to send to "thank you" page
            }).catch((error) => {
                console.log('error in client-side confirm page:', error)
            });
        };
    };

    const finalPage = () => {
        history.push('/thankyou');
    }

    const startOver = () => {
        history.push('/');
    }



    return (
        <div className="reviewPage">
            <Paper className="page5" elevation={6}>
            <h1>Review Your Feedback:</h1>

            <h3>Feeling: {reduxStore.feeling}</h3>
            <h3>Understanding: {reduxStore.understanding}</h3>
            <h3>Support: {reduxStore.support}</h3>
            <h3>Comments: {reduxStore.comments}</h3>

            <Button variant="contained" color="secondary" onClick={() => postToDatabase(reduxStore)}>Confirm</Button>
            </Paper>
        </div>
    )

}

export default Review;