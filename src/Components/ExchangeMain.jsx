import React, { useState, useEffect } from 'react';
import '../Style/Exchange.css';
import ExchangeInput from './ExchangeInput';
import ExchangeOutput from './ExchangeOutput';
import * as Api from '../Services/ApiService';
import ExchangeTime from './ExchangeTime';

const ExchangeMain = () => {
  let [target, setTarget] = useState('USD');
  let [total, setTotal] = useState(0);
  let [rates, setRates] = useState({});

  useEffect(() => {
    Api.apiRates().then((data) => {
      setRates(data);
    });
  }, []);

  const convert = (obj) => {
    setTarget(obj.target);
    if (obj.target === 'USD') {
      if (obj.base === 'USD') return setTotal(obj.amount * 1);
      setTotal(getUsd(obj.base, obj.amount, rates));
    } else if (obj.base === 'USD') {
      switch (obj.target) {
        case 'USD':
          setTotal(obj.amount * rates.quotes.USDUSD);
          break;
        case 'EUR':
          setTotal(obj.amount * rates.quotes.USDEUR);
          break;
        case 'ILS':
          setTotal(obj.amount * rates.quotes.USDILS);
          break;
        case 'BTC':
          setTotal(obj.amount * rates.quotes.USDBTC);
          break;
        case 'THB':
          setTotal(obj.amount * rates.quotes.USDTHB);
          break;

        default:
          break;
      }
    } else {
      switch (obj.target) {
        case 'EUR':
          setTotal(getUsd(obj.base, obj.amount, rates) * rates.quotes.USDEUR);
          break;
        case 'ILS':
          setTotal(getUsd(obj.base, obj.amount, rates) * rates.quotes.USDILS);
          break;
        case 'BTC':
          setTotal(getUsd(obj.base, obj.amount, rates) * rates.quotes.USDBTC);
          break;
        case 'THB':
          setTotal(getUsd(obj.base, obj.amount, rates) * rates.quotes.USDTHB);
          break;
        default:
          break;
      }
    }
  };

  const getUsd = (currency, amount, rates) => {
    switch (currency) {
      case 'EUR':
        return amount / rates.quotes.USDEUR;
      case 'ILS':
        return amount / rates.quotes.USDILS;
      case 'BTC':
        return amount / rates.quotes.USDBTC;
      case 'THB':
        return amount / rates.quotes.USDTHB;
      default:
        break;
    }
  };

  return (
    <div className='eMain container-fluid bg-dark d-flex flex-column'>
      <div className='eJumbo jumbotron text-center'>
        <h1 className='hMain display-4 font-weight-bold text-warning'>
          Currency Exchanger
        </h1>
      </div>
      <ExchangeTime />
      <div>
        <ExchangeInput getInput={convert} />
        <ExchangeOutput total={total} target={target} />
      </div>
    </div>
  );
};

export default ExchangeMain;
