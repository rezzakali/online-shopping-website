import { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { add } from '../../features/cartSlice';
import { fetchProducts } from '../../features/productsSlice';
import styles from '../../style/Search.module.css';
import LoadingSpinner from '../Spinner';
import AddToCartSvg from '../svg/AddToCartSvg';

function Products() {
  const [searchInput, setSearchInput] = useState('');
  const {
    item: products,
    error,
    isLoading,
  } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <h1>{error}</h1>}
      <div className={styles.formInput}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            className={`me-2 ${styles.search_input}`}
            aria-label="Search"
          />
        </Form>
      </div>

      <Row xs={1} md={3} className="g-4">
        {products
          ?.filter((val) => {
            if (searchInput === '') {
              return val;
            } else if (
              val.category.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return val;
            }
          })
          .map((product, id) => (
            <Col key={id}>
              <Card style={{ height: '510x', padding: '10px' }}>
                <p>{product.category}</p>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: '250px', height: '300px', margin: 'auto' }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                </Card.Body>
                <Card.Text>$ {product.price}</Card.Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Button size="sm" onClick={() => addToCartHandler(product)}>
                    <AddToCartSvg />
                  </Button>
                  <Link
                    to={`/productdetails/${id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    Details...
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
      </Row>
      <br />
      <br />
    </>
  );
}

export default Products;
