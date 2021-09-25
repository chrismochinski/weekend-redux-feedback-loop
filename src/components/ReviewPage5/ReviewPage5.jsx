import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

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
                    position: 'top-end',
                    icon: 'success',
                    title: 'Feedback Saved!',
                    showConfirmButton: false,
                    timer: 1000
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
            <h1>Review Your Feedback:</h1><br />

            <h3>Feeling: {reduxStore.feeling}</h3>
            <h3>Understanding: {reduxStore.understanding}</h3>
            <h3>Support: {reduxStore.support}</h3>
            <h3>Comments: {reduxStore.comments}</h3>

            <button onClick={() => postToDatabase(reduxStore)}>Confirm</button>

        </div>
    )

}

export default Review;