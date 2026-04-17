import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; 
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from './studentComp/Home';
import Register from './studentComp/Register';
import Display from './studentComp/Display';
import Update from './studentComp/Update';
import Signout from './studentComp/Signout';


function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        
        <Navbar bg="dark" data-bs-theme="dark" className="mb-4">
          <Container>
            <Navbar.Brand as={Link} to="/">Student App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/display">Display</Nav.Link>
              <Nav.Link as={Link} to="/update">Update</Nav.Link>
              <Nav.Link as={Link} to="/signout">Signout</Nav.Link>
              
            </Nav>
          </Container>
        </Navbar>

        
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/display" element={<Display />} />
            <Route path="/register" element={<Register />} />
            <Route path="/update" element={<Update/>} />
            <Route path="/signout" element={<Signout />} />
          </Routes>
        </Container>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

   