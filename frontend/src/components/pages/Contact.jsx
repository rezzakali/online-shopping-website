import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Facebook from '../svg/Facebook';
import Instagram from '../svg/Instagram';
import Twitter from '../svg/Twitter';
import Youtube from '../svg/Youtube';

function Contact() {
  return (
    <Row className="text-center">
      <Col sm={1} md={6} lg={6} className="mt-4">
        <h3>location</h3>
        <p>128 RT Corner,xxxx, India 784XXX</p>
        <br />
        <br />
        <div>
          <h2> Follow us</h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '5px',
            }}
          >
            <Facebook />
            &nbsp;
            <Twitter />
            &nbsp;
            <Instagram />
            &nbsp;
            <Youtube />
          </div>
          <p>@2022 privacy policy</p>
        </div>
      </Col>
      <Col sm={1} md={6} lg={6}>
        <h3>contact form</h3>
        <form>
          <input
            type="text"
            placeholder="your name"
            style={{ padding: '5px', width: '100%' }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="your email address"
            style={{ padding: '5px', width: '100%' }}
          />
          <br />
          <br />
          <textarea
            type="text"
            rows={4}
            placeholder="text"
            style={{ padding: '5px', width: '100%' }}
          />
          <br />
          <br />
          <Button style={{ width: '100%' }}>Submit</Button>
        </form>
      </Col>
    </Row>
  );
}

export default Contact;
