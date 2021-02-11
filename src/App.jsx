import './styles/app.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Nav />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
