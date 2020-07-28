import React, { useRef } from 'react';

const ExchangeInput = (props) => {
  let targetVal = useRef(null);
  let baseVal = useRef(null);

  const formSubmit = (e) => {
    e.preventDefault();
    let obj = {
      amount: Number(e.target.amount.value),
      base: e.target.base.value,
      target: e.target.target.value,
    };
    if (obj.amount === 0 || obj.amount < 0)
      return alert('Enter positive value!');
    props.getInput(obj);
  };

  const swap = () => {
    let targetId;
    let baseId;
    targetVal.current.childNodes.forEach((v, i) => {
      if (v.value === targetVal.current.value) targetId = i;
    });
    baseVal.current.childNodes.forEach((v, i) => {
      if (v.value === baseVal.current.value) baseId = i;
    });
    targetVal.current.value = baseVal.current.childNodes[baseId].value;
    baseVal.current.value = targetVal.current.childNodes[targetId].value;
  };

  return (
    <form
      onSubmit={formSubmit}
      className='container d-flex flex-column align-items-center bg-darken-0'>
      <table className='table table-borderless bg-dark font-weight-bold text-light col-lg-6'>
        <thead>
          <tr>
            <th className='col-3' colSpan='2'>
              Amount
            </th>
            <th className='col-3' colSpan='2'>
              From
            </th>
            <th className='col-3' colSpan='2'></th>
            <th className='col-3' colSpan='2'>
              To
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='align-middle' colSpan='2'>
              <input
                type='number'
                step='0.1'
                id='amount'
                min='0'
                defaultValue='0'
                className='form-control'
              />
            </td>
            <td className='align-middle col-3' colSpan='2'>
              <select ref={baseVal} id='base' className='form-control col'>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='ILS'>ILS</option>
                <option value='BTC'>BTC</option>
                <option value='THB'>THB</option>
              </select>
            </td>
            <td className='align-middle text-center' colSpan='2'>
              <svg
                onClick={swap}
                width='4em'
                height='4em'
                viewBox='0 0 16 16'
                className='btn btn-outline-dark border border-0 bi bi-arrow-counterclockwise'
                fill='gold'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='gold'
                  d='M12.83 6.706a5 5 0 0 0-7.103-3.16.5.5 0 1 1-.454-.892A6 6 0 1 1 2.545 5.5a.5.5 0 1 1 .91.417 5 5 0 1 0 9.375.789z'
                />
                <path
                  fillRule='gold'
                  d='M7.854.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 1 0 .708-.708L5.707 3 7.854.854a.5.5 0 0 0 0-.708z'
                />
              </svg>
            </td>
            <td className='align-middle' colSpan='2'>
              <select
                ref={targetVal}
                name=''
                id='target'
                className='form-control col'>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='ILS'>ILS</option>
                <option value='BTC'>BTC</option>
                <option value='THB'>THB</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <input
        type='submit'
        className='eBtn btn btn-outline-warning'
        value='CONVERT'
      />
    </form>
  );
};

export default ExchangeInput;
