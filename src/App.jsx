import './styles/App.scss';
import './styles/nav.scss';
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { NavData } from './data/NavData';
import SubMenu from './components/SubMenu';

function App() {
  const [sidebarStatus, setSidebarStatus] = React.useState(false);

  const showSidebar = () => {
    setSidebarStatus(!sidebarStatus);
  };
  return (
    <div className='App'>
      <Header />
      <main>
        <nav
          style={
            sidebarStatus
              ? { transform: 'translateX(-90%)' }
              : { transform: 'translateX(0)' }
          }
        >
          {NavData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
          <span className='nav-toggle' onClick={showSidebar}>
            {sidebarStatus ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
          </span>
        </nav>
        {/* <Nav /> */}
        <Dashboard isSidebarOpen={sidebarStatus} />
      </main>
    </div>
  );
}

export default App;
