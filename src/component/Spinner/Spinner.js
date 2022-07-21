import React from 'react';
import loading from "./loading.gif";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='spinner-container' >
      <img src={loading} alt="loading" />
    </div>
  )
}

export default Spinner