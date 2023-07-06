import { Outlet } from 'react-router';
import './App.scss';

function App() {
  return (
    <div className="app">
      {/* <header>
        <p>Daniel Heim</p>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/work">Work</a></li>
          </ul>
        </nav>
      </header> */}
      <Outlet />
      <footer>
        <div className='section'>
        <p>&copy; Daniel Heim</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
