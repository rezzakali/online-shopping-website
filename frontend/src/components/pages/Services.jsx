import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Services() {
  return (
    <CardGroup>
      <Card className="m-3 border">
        <Card.Body>
          <Card.Title>
            {' '}
            Quality Products & <br /> Best Price
          </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-3 border">
        <Card.Body>
          <Card.Title>
            {' '}
            Easy Returns & <br /> Customization
          </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-3 border">
        <Card.Body>
          <Card.Title>
            {' '}
            Our Impressive Customer & <br /> Support
          </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Services;
