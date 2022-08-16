import logo from './logo.svg';
import './App.css';
import ContactStateComponent from './components/container/contact.state';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactStateComponent></ContactStateComponent>
      </header>
    </div>
  );
}

export default App;
