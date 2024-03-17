import React from 'react'

export default function SingleComment({comm}) {
const {comment,author,createdAt} = comm;

    return (
        <>
            <div className='border p-3 my-2 shadow-sm rounded'>
                <p className='fw-bolder'> {comment} </p>
                <p>Author: <b>{author}</b></p>
                <p>Created at: <br></br><i>{createdAt}</i></p>
            </div>
        </>
    )
}
