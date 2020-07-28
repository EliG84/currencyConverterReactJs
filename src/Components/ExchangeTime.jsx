import React, { useState } from 'react';
import '../Style/Exchange.css';

const ExchangeTime = () => {
  let [time, setTime] = useState(new Date());

  setInterval(() => setTime(new Date()), 1000);

  return (
    <div className='container text-light font-weight-bolder text-center'>
      <p className='eTime p-0 m-0'>{time ? time.toLocaleString() : ''}</p>
    </div>
  );
};

export default ExchangeTime;
