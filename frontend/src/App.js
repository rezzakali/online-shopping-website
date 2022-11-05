import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './components/Card';
import Cart from './components/Cart';
import GotoTopArrow from './components/GotoTop';
import NavComponent from './components/navbar/NavComponent';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Products from './components/pages/Products';

function App() {
  return (
    <>
      <NavComponent />
      <ToastContainer />
      <Container fluid style={{ marginTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetails/:id" element={<Card />} />
        </Routes>
        <GotoTopArrow />
      </Container>
    </>
  );
}

export default App;
