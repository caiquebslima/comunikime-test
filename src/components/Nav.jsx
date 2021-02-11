import React from 'react';
import { NavData } from '../data/NavData';
import SubMenu from './SubMenu';
import '../styles/nav.scss';

const Nav = () => {
  return (
    <nav>
      {NavData.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })}
    </nav>
  );
};

export default Nav;
