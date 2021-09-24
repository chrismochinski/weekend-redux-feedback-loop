import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Feeling({feedbackObject}) {

    const dispatch = useDispatch();

    let [feeling, setFeeling] = useState('')

    const submitFeeling = (event) => {
        event.preventDefault();
        if (1 <= feeling && 10 >= feeling) {
            feedbackObject.feeling = feeling;
            console.log('feedbackObject is now:', feedbackObject);
            dispatch({ type: 'ADD_FEELING', payload: feeling })
            clearFeeling();
        }
        else {
            alert("You must enter a value between 1 and 10")
            clearFeeling();
            return;
        }
    }
    const clearFeeling = () => {
        setFeeling('');
    }

    return (
        <div>
            <h1>PAGE 1 - How are you feeling today?</h1>
            <form onSubmit={submitFeeling}>
                <input onChange={(event) => setFeeling(event.target.value)}
                    value={feeling}
                    type='number'
                    placeholder='1 - 10'
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Feeling;