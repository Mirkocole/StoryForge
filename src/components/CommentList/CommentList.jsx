import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import SingleComment from '../SingleComment/SingleComment';
import './CommentList.css';

export default function CommentList(props) {


    
    const API = 'https://striveschool-api.herokuapp.com/api/books/';

    // Token di autenticazione API
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY0OWY0ZTdiZWEzMTAwMWEyZGYyYjgiLCJpYXQiOjE3MTA1MzAzODIsImV4cCI6MTcxMTczOTk4Mn0.fcccY5IbTKhtp-3jPKsl6gbngnrGCH4KhnXYQY6j6jA';


    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { bookasin ,refresh, newRefresh} = props;

    useEffect(() => {

        
        getComments();
        

    }, [refresh])

    async function getComments() {

        try {

            setLoading(true);
            let result = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookasin}/comments`,
                {
                    headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + token },
                });


            if (result.ok) {
                let json = await result.json();

                if (json.length > 0) {
                    
                    setList(json);
                }

                
                setLoading(false);

            } else {
                let error = new Error('errore del server');
                throw error;
                setLoading(false);
            }
            
            
        } catch (error) {
            console.error(`${error} status: ${error.status}`);
            setLoading(false);
        }
    }

   
    return (
        <div className='comment-list'>
            {loading &&
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }

            {
                
                list.map((ele) => {
                    return <SingleComment key={ele._id} comm = {ele} newRefresh={newRefresh}/>
                      
                  })
            }
        </div>
    )
}
