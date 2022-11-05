import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BagSvg from '../svg/BagSvg';
import styles from './Navbar.module.css';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand to="/">Online Shopping</Navbar.Brand>
        <NavLink
          className="mx-4"
          to="/cart"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <BagSvg />
        </NavLink>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={styles.toggler}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`ms-auto my-2 my-lg-0 ${styles.nav}`}
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className={styles.link} to="/">
              Home
            </NavLink>
            <NavLink className={styles.link} to="/contact">
              Contact
            </NavLink>
            <NavLink className={styles.link} to="/products">
              All Products
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
