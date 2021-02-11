import React from 'react';
import { NavData } from '../data/NavData';
import SubMenu from './SubMenu';
import '../styles/nav.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Sidebar = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => {
    console.log(sidebar);
    setSidebar(!sidebar);
  };

  return (
    <>
      <nav
        style={
          sidebar
            ? { transform: 'translateX(-90%)' }
            : { transform: 'translateX(0)' }
        }
      >
        {NavData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
        <span className='nav-toggle' onClick={showSidebar}>
          {sidebar ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
        </span>
      </nav>
    </>
  );
};

export default Sidebar;
