import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  add,
  decreaseCartItem,
  getTotalAmount,
  removeAllCartItem,
  removeCartItem,
} from '../features/cartSlice';
import styles from '../style/Cart.module.css';
import EmptyCartSvg from './svg/EmptyCartSvg';
import LeftArrowsvg from './svg/LeftArrowsvg';

function Cart() {
  // for modals related state
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  // products related
  const products = useSelector((state) => state.cart.cart);

  const { totalAmount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeAllCartItemHandler = () => {
    dispatch(removeAllCartItem());
  };

  const removeSingleCartItemHandler = (product) => {
    dispatch(removeCartItem(product));
  };

  const decrease = (product) => {
    dispatch(decreaseCartItem(product));
  };
  const increase = (product) => {
    dispatch(add(product));
  };

  const buyNowHandler = async () => {
    const {
      data: { key },
    } = await axios.get('http://localhost:5000/api/getkey');

    const {
      data: { order },
    } = await axios.post('http://localhost:5000/api/checkout', {
      totalAmount,
    });

    const options = {
      key,
      amount: order.totalAmount,
      currency: 'INR',
      name: 'Rezzak Ali',
      description: 'Tutorial of RazorPay',
      image: 'https://avatars.githubusercontent.com/u/87976069?v=4',
      order_id: order.id,
      callback_url: 'http://localhost:5000/api/paymentverification',
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#121212',
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  // displaying modals
  async function handleShow(amount) {
    setFullscreen(amount);
    setShow(true);
  }

  useEffect(() => {
    dispatch(getTotalAmount());
  }, [dispatch, products]);
  return (
    <div>
      {/* checkout modals start from here */}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Provide Your shipping address</Modal.Title>
        </Modal.Header>
        <code>
          <h1>Total: ${totalAmount}</h1>
        </code>
        <Modal.Body>
          <div
            style={{
              width: '50%',
              border: '1px solid black',
              margin: 'auto',
              borderRadius: '5px',
            }}
          >
            <form className="p-5">
              <input
                type="text"
                placeholder="your full name"
                style={{ width: '100%' }}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="your email"
                style={{ width: '100%' }}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="phone"
                style={{ width: '100%' }}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="full address"
                style={{ width: '100%' }}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="state"
                style={{ width: '100%' }}
              />
              <br />
              <br />
              <input
                type="number"
                placeholder="pin"
                style={{ width: '100%' }}
              />
              <br />
              <br />
            </form>
            <Button type="submit" onClick={buyNowHandler}>
              Buy now
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      {/* checkout modals end from here */}

      {products.length === 0 ? (
        <div className="text-center">
          <Link to="/" style={{ display: 'flex', textDecoration: 'none' }}>
            <LeftArrowsvg /> &nbsp; Go back
          </Link>
          <div className={styles.empty_cart}>
            <h4>Your cart is empty</h4>
            <EmptyCartSvg />
          </div>
        </div>
      ) : (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, id) => (
                <tr key={id}>
                  <td>
                    <img
                      src={product.image}
                      alt="pImage"
                      width={'100px'}
                      height={'100px'}
                    />
                    <p>{product.title}</p>
                    <button
                      style={{ border: '1px solid gray' }}
                      onClick={() => removeSingleCartItemHandler(product)}
                    >
                      Remove
                    </button>
                  </td>
                  <td>$ {product.price}</td>
                  <td>
                    <button
                      style={{ margin: '5px', width: '30px', border: 'none' }}
                      onClick={() => decrease(product)}
                    >
                      -
                    </button>
                    {product.cartQuantity}
                    <button
                      style={{ margin: '5px', width: '30px', border: 'none' }}
                      onClick={() => increase(product)}
                    >
                      +
                    </button>
                  </td>
                  <td>$ {product.price * product.cartQuantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
          <br />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Button
              variant="danger"
              style={{ height: '40px' }}
              onClick={removeAllCartItemHandler}
            >
              Clear cart
            </Button>{' '}
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <h3>Subtotal</h3>
                <h3>$ {totalAmount}</h3>
              </div>
              <p>Taxes and shipping calculated at checkout.</p>
              <Button variant="success" onClick={() => handleShow(totalAmount)}>
                Checkout
              </Button>
              <br />
              <br />
              <Link to="/" style={{ display: 'flex', textDecoration: 'none' }}>
                <LeftArrowsvg /> &nbsp; Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
    </div>
  );
}

export default Cart;
