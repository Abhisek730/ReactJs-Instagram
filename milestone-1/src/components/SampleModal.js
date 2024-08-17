import React from 'react';
import Modal from "react-modal"

export default function SampleModal({isModalOpen,closeModal}) {
    Modal.setAppElement('#root');
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
         style={customStyles}
        contentLabel="Example Modal"
      >
        
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>

        
        
      </Modal>
    </div>
  )
}
