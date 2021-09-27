import './ThankYouPage6.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button'; 
import Paper from "@material-ui/core/Paper"; 
import { AiFillBackward } from "react-icons/ai";


function ThankYou() {

    const history = useHistory();
    const dispatch = useDispatch();

    const clearStore = () => {
        const action = {type: 'CLEAR_STORE'}
        dispatch(action)
        returnHome();
    }

    const returnHome = () => {
        history.push('/');
    }

    return(

        <div>
            <Paper className="thankYouPage" elevation={6}>
            <h1>Thanks for providing your feedback!</h1>
            <Button 
            style={{
                backgroundColor: '#077D40'
            }}
            variant="contained" size="large" color="secondary" onClick={() => clearStore()}><AiFillBackward />Start Over</Button>
            </Paper>
        </div>

    )
}

export default ThankYou;