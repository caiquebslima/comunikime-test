import React from 'react';
import '../styles/counter.scss';

function Counter({ item }) {
  return (
    <div className='counter'>
      <figure
        style={{ background: `${item.background}`, color: `${item.color}` }}
      >
        {item.icon}
      </figure>
      <div className='counter__info'>
        <p className='number'>{item.counter}</p>{' '}
        <p className='legend'>Contatos</p>{' '}
      </div>
    </div>
  );
}

export default Counter;
