import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/Footer';
import Content from './components/content';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="read">Read</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>  
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/home' element={<Content></Content>}></Route>
          <Route path='/read' element={<Read></Read>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
