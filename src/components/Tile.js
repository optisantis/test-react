import styled from 'styled-components';

import apple from "../images/apple.png";
import avocado from "../images/avocado.png";
import banana from "../images/banana.png";
import corn from "../images/corn.png";
import lemon from "../images/lemon.png";
import lettuce from "../images/lettuce.png";
import onion from "../images/onion.png";
import strawberry from "../images/strawberry.png";

const tileImages = {
  apple, avocado, banana, corn, lemon, lettuce, onion, strawberry
}

const StyledTile = styled.div`
`;

const Card = styled.img`
  object-fit: cover;
  background: white;
  padding: 0.2em;
  height: 100%;
  width: 100%;
  border-radius: 0.5em;
`;


const Tile = () => (

    <Card src={tileImages['apple']} />

);

export default Tile;
