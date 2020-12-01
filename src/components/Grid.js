import styled from 'styled-components';
import Tile from "./Tile";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 10em);

  width: 40em;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  margin-bottom: 2em;
`;

const ResetInput = styled.input`
  margin: auto;
  display: block;
  background: rgb(9, 211, 172);
  padding: 0.5em;
  border-radius: 0.2em;
  appearance: none;
  color: rgb(41, 45, 62);
  border: none;
  cursor: pointer;

`;

const Grid = () => (
  <div>
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
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </StyledGrid>

    <ResetInput type="button" value="Réinitialiser"/>
  </div>
);

export default Grid;
