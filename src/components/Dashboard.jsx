import React from 'react';
import Counter from './Counter';
import { CounterData } from '../data/CounterData';
import '../styles/dashboard.scss';
import { ChartData } from '../data/ChartData';
import Chart from './Chart';

function Dashboard({ isSidebarOpen }) {
  return (
    <section
      className='dashboard'
      style={isSidebarOpen ? { marginLeft: '0' } : { marginLeft: '220px' }}
    >
      <h2>Gráficos por Mídia</h2>
      <article className='counters'>
        {CounterData.map((item, index) => {
          return <Counter item={item} key={index} />;
        })}
      </article>
      <article className='charts'>
        {ChartData.map((item, index) => {
          return <Chart item={item} key={index} />;
        })}
      </article>
    </section>
  );
}

export default Dashboard;
