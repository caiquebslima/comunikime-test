import React, { useState } from 'react';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div onClick={item.subNav && showSubnav}>
        <ul>
          {item.icon}
          <li>{item.title}</li>
        </ul>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </div>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <ul key={index}>
              {item.icon}
              <li>{item.title}</li>
            </ul>
          );
        })}
    </>
  );
};

export default SubMenu;
