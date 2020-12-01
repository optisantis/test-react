import styled from 'styled-components';
import tileDefaults from '../images/tileDefaults';

const Card = styled.img`
  object-fit: cover;
  background: white;
  padding: 0.2em;
  height: 100%;
  width: 100%;
  border-radius: 0.5em;
  cursor: pointer;
`;


const Tile = ({ tile }) => (
  <Card src={ tile.image } />
);

export default Tile;
