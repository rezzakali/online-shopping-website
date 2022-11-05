import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from '../features/cartSlice';
import { fetchProductById } from '../features/productDetailsSlice';
import AddToCartSvg from './svg/AddToCartSvg';

function Card() {
  const {
    item: product,
    error,
    isLoading,
  } = useSelector((state) => state.productDetails);

  let { id } = useParams();

  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      {product ? (
        <Row className="m-2">
          <Col sm={8} lg={6}>
            <img
              src={product.image}
              alt="pImage"
              style={{ width: '100%', height: '60%', margin: 'auto' }}
            />
          </Col>
          <Col sm={4} lg={6} style={{ marginTop: '70px' }}>
            <h3>{product.title}</h3>
            <p>{product.category}</p>

            <p>{product.description}</p>
            <h4>${product.price}</h4>

            <Button
              style={{
                width: '200px',
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
              }}
              onClick={() => addToCartHandler(product)}
            >
              Add to cart &nbsp; <AddToCartSvg />
            </Button>
          </Col>
        </Row>
      ) : (
        ''
      )}

      <div></div>
    </div>
  );
}

export default Card;
