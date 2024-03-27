import React, { useContext, useState } from 'react'
import CommentList from '../CommentList/CommentList'
import { Button, Modal } from 'react-bootstrap'
import AddComment from '../AddComment/AddComment';
import './CommentArea.css';
import { ThemeContext } from '../../context/ThemeContextProvider';

export default function CommentArea(props) {

    const { bookasin } = props;

    const [showModal, setShowModal] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const { theme } = useContext(ThemeContext);

    function newRefresh() {
        setRefresh((prev => !prev));
    }

    function handleShow() {
        setShowModal(true);
    }
    function handleHidden() {
        setShowModal(false);
    }



    return (

        <>
        {
            bookasin && 
        <div className={`p-3 border rounded bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} d-flex flex-column justify-content-between sticky-top`}>
            <h4 className='text-center d-inline-block'>Comments</h4>
            <Button className='w-auto color-primary border border-none mb-4' onClick={handleShow}>New Comment</Button>
            <CommentList bookasin={bookasin} refresh={refresh} newRefresh={newRefresh} />
            {showModal && <AddComment showModal={showModal ? 'show' : 'hidden'} handleHidden={handleHidden} bookasin={bookasin} newRefresh={newRefresh} />}
        </div>
        }
        {
            !bookasin && <div className='sticky-top p-3'>
            <h4 className={`text-${theme === 'dark' ? 'light' : 'dark'}`}>Select a book to see it's commets!</h4>
        </div>
        }
        </>
    )


}

