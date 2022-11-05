import React, { Suspense } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import homePageImage from '../../assets/homeImage.jpg';
import Spinner from '../Spinner';
import Services from './Services';
const Products = React.lazy(() => import('./Products'));

function Home() {
  return (
    <>
      <Row className="text-center">
        <Col
          sm={6}
          lg={6}
          style={{
            display: 'inline-block',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '40px',
          }}
        >
          <h2>
            Get the Best Products <br />
            From Our Online Store
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            dignissimos doloribus ipsam minima, dolorem enim?
          </p>
          <Button>Choose Products</Button>
        </Col>
        <Col sm={6} lg={6}>
          <img src={homePageImage} alt="hImage" style={{ width: '100%' }} />
        </Col>
      </Row>
      <Row className="d-flex">
        <Services />
      </Row>
      <Suspense fallback={<Spinner />}>
        <Products />
      </Suspense>
    </>
  );
}

export default Home;
