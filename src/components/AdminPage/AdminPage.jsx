import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import zIndex from '@mui/material/styles/zIndex';
// import './App.css';

function AdminPage() {

    let [feedbackArray, setFeedbackArray] = useState([]);

    useEffect(() => {
        refreshFeedback();
    }, [])

    //GET attempt
    const refreshFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            console.log('response.data is:', response.data);
            setFeedbackArray(response.data);
        }).catch(error => {
            console.log('error on GET client side:', error);
        })
    }

    console.log('feedbackArray is now:', feedbackArray)

    return (
        <div>
            <h1 id="adminHeader">ADMIN</h1>
            <table className="center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FEELING</th>
                        <th>UNDERSTANDING</th>
                        <th>SUPPORT</th>
                        <th>COMMENTS</th>
                        <th>FLAGGED?</th>
                        <th></th>
                        <th>DATE</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackArray.map((feedback, i) => (
                        <tr key={i}>
                            <td>{feedback.id}</td>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td>{feedback.flagged ? 'Yes' : 'No'}</td>
                            <td><button id="flagButton">Flag</button></td>
                            <td>{feedback.date}</td>
                            <td><button id="deleteButton">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>

    )
}

export default AdminPage;
