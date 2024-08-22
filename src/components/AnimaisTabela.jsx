import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';

const AnimaisTabela = ({ animais = [], onAdotar }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Animais</th>
          <th>Disponíveis para adoção</th>
        </tr>
      </thead>
      <tbody>
        {animais.map((animal, i) => {
          return (
            <tr key={animal.id}>
              <td>{animal.animal}</td>
              <td>{animal.disponiveis}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => onAdotar(animal.id)}
                  disabled={animal.disponiveis <= 0}
                >
                  Adotar
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

AnimaisTabela.propTypes = {
  animais: PropTypes.array,
  onAdotar: PropTypes.func.isRequired,
};

export default AnimaisTabela;