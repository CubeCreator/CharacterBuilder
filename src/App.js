//Import the needed requirements
import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import CharacterPage from './components/CharacterPage';
import WeaponsPage from './components/WeaponsPage';
import PowersPage from './components/PowersPage';
import SubmitsPage from './components/SubmitsPage';

function App() {
  return (
    //Create a Navbar to Switch between the pages
    <div className="App">
      <BrowserRouter>
        <Navbar expand="lg">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Character Details </Nav.Link>
              <Nav.Link href="/Weapons">Weapons </Nav.Link>
              <Nav.Link href="/Powers">Powers & Abilities </Nav.Link>
              <Nav.Link href="/Submissions">Submitted Characters</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<CharacterPage />}/>
          <Route path="/Weapons" element={<WeaponsPage />}/>
          <Route path="/Powers" element={<PowersPage />}/>
          <Route path="/Submissions" element={<SubmitsPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
