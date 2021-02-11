import React from 'react';
import '../styles/header.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
  return (
    <header>
      <h2>OMN!A</h2>
      <aside>
        <span className='logout-icon'>
          <ExitToAppIcon />
        </span>
        Sair
      </aside>
    </header>
  );
}

export default Header;
