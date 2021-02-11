import React from 'react';

function Chart({ item }) {
  return (
    <div className='chart' style={{ background: `${item.background}` }}>
      <figure>{item.icon}</figure>
      <span>
        {item.counter} {item.type}
      </span>
    </div>
  );
}

export default Chart;
