import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <div className="spinner">
      <Spinner animation="grow" />
    </div>
  );
}

export default LoadingSpinner;
