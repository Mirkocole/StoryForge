import React, { useEffect } from 'react';
import { IoIosStar } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import './SingleComment.css';

export default function SingleComment({ comm, newRefresh }) {

    const API = 'https://striveschool-api.herokuapp.com/api/comments/';

    // Token di autenticazione API
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY0OWY0ZTdiZWEzMTAwMWEyZGYyYjgiLCJpYXQiOjE3MTA1MzAzODIsImV4cCI6MTcxMTczOTk4Mn0.fcccY5IbTKhtp-3jPKsl6gbngnrGCH4KhnXYQY6j6jA';
    const { _id,comment, author, createdAt, rate} = comm;

    let star = [];

    for (let index = 0; index < rate; index++) {
        star.push(index);

    }

    async function deleteComment(){
        try {
            let res = await fetch(`${API}${_id}`,
                {
                    headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + token },
                    method:"DELETE",
                });

            if (res.ok) {
                console.log('Eliminazione avvenuta con successo!');
                newRefresh();
            }else{
                console.log('Eliminazione non avvenuta!');
                console.log(res.status);

            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className='border p-3 my-2 shadow-sm rounded position-relative'>

                <MdDelete className='delete-button' onClick={deleteComment} />

                <p className='fw-bolder'> {comment} </p>
                <p>Author: <b>{author}</b></p>
                <p>Rate:
                    {star.map((el) => <IoIosStar key={el} />)}
                </p>
                <p>Created at: <br></br><i>{createdAt}</i></p>
            </div>
        </>
    )
}
