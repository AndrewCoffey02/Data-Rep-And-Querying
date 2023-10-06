import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
