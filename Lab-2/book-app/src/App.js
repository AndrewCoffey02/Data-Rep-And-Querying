import logo from './logo.svg';
import './App.css';
import Header from './header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Hello World!</h1>
      <h1>It is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
