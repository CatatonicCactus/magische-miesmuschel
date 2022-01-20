import React from 'react';
import Modal from 'react-modal';


const OptionalModal = (props) => {
    return (
        <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.handleHideModal}
        closeTimeoutMS={0}
        >    
        <h3>Selected Option</h3>
        <h4>{props.selectedOption}</h4>
        <button onClick={props.handleHideModal}>Alrighty</button>
        </Modal>
    )
}

export default OptionalModal;