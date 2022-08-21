import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import PruebaSetState from './components/prueba';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Clock></Clock> */}
        <PruebaSetState></PruebaSetState>
      </header>
    </div>
  );
}

export default App;
