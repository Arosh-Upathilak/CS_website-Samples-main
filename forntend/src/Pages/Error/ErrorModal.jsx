import React from 'react';
import './ErrorModal.css'; // Ensure you have this CSS file for styling

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button className="modal-button" onClick={onClose}>Okay</button>
      </div>
    </div>
  );
};

export default ErrorModal;
