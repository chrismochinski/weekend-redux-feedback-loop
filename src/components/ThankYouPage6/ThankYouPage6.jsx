import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


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
            <h1>Thanks for providing your feedback!</h1>
            <button onClick={() => clearStore()}>Start Over</button>
        </div>

    )
}

export default ThankYou;