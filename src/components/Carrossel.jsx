import { Carousel, Container, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Carrossel.css';

const Carrossel = ({ itens = [] }) => {
  return (
    <Container fluiD="sm" className="p-2">
      <Carousel controls={false}>
        {itens.map((item, i) => (
          <Carousel.Item key={i}>
            <Image src={item.imagemUrl} alt={`Slide ${i}`} />
            <Carousel.Caption>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );    
};

Carrossel.propTypes = {
  itens: PropTypes.array,
};

export default Carrossel;
