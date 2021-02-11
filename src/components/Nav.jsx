import React from 'react';
import { NavData } from '../data/NavData';
import SubMenu from './SubMenu';
import '../styles/nav.scss';

const Sidebar = () => {
  // const [sidebar, setSidebar] = React.useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav
    // sidebar={sidebar}
    >
      {NavData.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })}
      {/* <figure>
        <img src='../../comunikme.jpeg' alt='Comunikme logo' />
      </figure> */}
    </nav>
  );
};

export default Sidebar;
