import styled from 'styled-components';
import Tile from "./Tile";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 10em);

  width: 40em;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
`;

const Grid = () => (
  <StyledGrid>
    <Tile />
    <Tile />
    <Tile />
    <Tile />
    <Tile />
    <Tile />
    <Tile />
    <Tile />
    <Tile />
    <Tile />
    <Tile />
    <Tile />
  </StyledGrid>
);

export default Grid;
