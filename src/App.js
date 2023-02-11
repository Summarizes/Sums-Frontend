import logo from './logo.svg';
import './App.css';
import Views from './views';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Views/>
    </div>
  );
}

export default App;
