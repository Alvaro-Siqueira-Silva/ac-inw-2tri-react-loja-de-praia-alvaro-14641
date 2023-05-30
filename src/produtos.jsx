import Card from "react-bootstrap/Card";
import json from "../db.json";
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Produtos() {
  return (
    <div className="linha">
      <Row xs={1} md={3} className="g-4" >
      {json.products.map((id) => (
          <Card  className="cartao" bg="dark" text="light">
            <Card.Img variant="top" className="proxyx " src={id.img} />
            <Card.Body>
              <Card.Title>{id.nome}</Card.Title>
              <Card.Text>{id.price} conto</Card.Text>
            </Card.Body>
          </Card>
          
      )
      )
      }
      </Row>
      <div className='bomba'></div>
    </div>
  );
}
export default Produtos;
