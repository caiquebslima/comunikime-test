import React, { useState } from 'react';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div className='nav-item main-nav' onClick={item.subNav && showSubnav}>
        <span className='nav-icon'>{item.icon}</span>
        <li>{item.title}</li>

        <div>
          {item.subNav && subnav ? (
            <span className='action-icon'>{item.iconOpened}</span>
          ) : item.subNav ? (
            <span className='action-icon'>{item.iconClosed}</span>
          ) : null}
        </div>
      </div>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div className='nav-item sub-nav' key={index}>
              <span className='nav-icon'>{item.icon}</span>
              <li>{item.title}</li>
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;
