import React, { useState } from 'react'
import CommentList from '../CommentList/CommentList'
import { Button,Modal } from 'react-bootstrap'
import AddComment from '../AddComment/AddComment';

export default function CommentArea(props) {

    const [showModal, setShowModal] = useState(false);
    const [refresh,setRefresh] = useState(false);

    function newRefresh(){
        setRefresh((prev => !prev));
    }

    function handleShow() {
        setShowModal(true);
    }
    function handleHidden() {
        setShowModal(false);
    }


    return (
        <div className='p-3 border rounded bg-light d-flex flex-column justify-content-between'>
            <h4 className='text-center d-inline-block'>Comments</h4>
            <Button className='w-auto' onClick={handleShow}>add</Button>
            <CommentList bookasin={props.bookasin} refresh={refresh} newRefresh={newRefresh}/>
            {showModal && <AddComment showModal={showModal ? 'show' : 'hidden'} handleHidden={handleHidden} bookasin={props.bookasin} newRefresh={newRefresh}/>}
        </div>
    )
}
