import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Review() {

    const dispatch = useDispatch();
    const reduxStore = useSelector(store => store.masterReducer);
    const history = useHistory
    console.log('store is now:', reduxStore);

    const postToDatabase = () => {
        console.log('Info to database:', reduxStore);
        axios({ 
            method: 'POST',
            url: '/feedback',
            data: reduxStore,
        }).then(response => {
            finalPage();
        }).catch((error) => {
            console.log('error in client-side confirm page:', error)
        });
    };

    return (
        <div className="reviewPage">
            <h1>Review Your Feedback:</h1><br />

            <h3>Feeling: {reduxStore.feeling}</h3>
            <h3>Understanding: {reduxStore.understanding}</h3>
            <h3>Support: {reduxStore.understanding}</h3>
            <h3>Comments: {reduxStore.comments}</h3>

            <button onClick={() => postToDatabase(reduxStore)}>Confirm</button>

        </div>
    )

}

export default Review;