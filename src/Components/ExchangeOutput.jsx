import React, { useState, useEffect } from 'react';

const ExchangeOutput = (props) => {
  return (
    <div className='container-fluid text-center mt-5'>
      <p className='text-warning'>You Get:</p>
      <h2 className='display-2 font-weight-bold text-warning'>
        {props.total ? props.total.toFixed(5) : 0}
      </h2>
      <p className='text-warning'>{props.target ? props.target : ''}</p>
    </div>
  );
};

export default ExchangeOutput;
