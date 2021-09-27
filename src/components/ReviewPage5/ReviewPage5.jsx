import './ReviewPage5.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { animated, useSpring } from "react-spring";

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
            axios({ //send data to database
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
        history.push('/thankyou'); // send to thank you page
    }

    const startOver = () => {
        history.push('/'); //start over as prompted
    }

    const goBack = () => { //goes back one page
        history.push('/page4');
    }

    const props = useSpring({
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(-30px, 30px)" },
    });

    return (
        <animated.div style={props}>
            <div className="reviewPage">
                <Paper className="page5" elevation={6}>
                    <h1>Review Your Feedback:</h1>
                    <div className="reviewText">
                        <h5>Feeling: <b>{reduxStore.feeling}</b></h5>
                        <h5>Understanding: <b>{reduxStore.understanding}</b></h5>
                        <h5>Support: <b>{reduxStore.support}</b></h5>
                        <h5 id="reviewPageComments">Comments: <b>{reduxStore.comments}</b></h5>
                    </div>

                    <div className="nextButton">
                        <Button variant="contained" size="small" color="primary" onClick={() => postToDatabase(reduxStore)}>Confirm<BsFillCaretRightFill /></Button>
                    </div>
                    <div className="prevButton">
                        <Button className="prevButton" variant="contained" size="small" color="secondary" onClick={() => goBack()}><BsFillCaretLeftFill />Prev</Button>
                    </div>
                </Paper>
            </div>
        </animated.div>
    )
}

export default Review;