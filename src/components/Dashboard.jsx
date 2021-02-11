import React from 'react';
import Counter from './Counter';
import { CounterData } from '../data/CounterData';
import '../styles/dashboard.scss';

function Dashboard() {
  return (
    <section className='dashboard'>
      <article className='counters'>
        {CounterData.map((item, index) => {
          return <Counter item={item} key={index} />;
        })}
      </article>
      <article className='charts'></article>
    </section>
  );
}

export default Dashboard;
