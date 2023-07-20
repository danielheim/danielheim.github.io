import { Outlet } from 'react-router';
import './App.scss';

function App() {
  return (
    <div className='app'>
      {/* <header>
        <p>Daniel Heim</p>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/work">Work</a></li>
          </ul>
        </nav>
      </header> */}
      <main className='app__item'>
        <Outlet />
      </main>
      <footer className='app__item'>
        <div className='section footer'>
          <p>&copy; Daniel Heim</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
