import { Button, Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ServicosCards.css'

const ServicosCards = ({ servicos = [] }) => {
  return (
    <Row className="p-2">
      {servicos.map((servico, i) => {
        return (
          <Col key={i}>
            <Card>
              <Card.Img variant="top" className='card-img-top w-100' src={servico.imagemUrl} />
              <Card.Body>
                <Card.Title>{servico.titulo}</Card.Title>
                <Card.Text>{servico.descricao}</Card.Text>
                <Button variant="primary">Acessar</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

ServicosCards.propTypes = {
    servicos: PropTypes.array,
  };
  
  export default ServicosCards;