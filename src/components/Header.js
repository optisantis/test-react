import styled from 'styled-components';
import HeaderItem from './HeaderItem';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40em;
`;

const Header = ({tries}) => (
  <StyledHeader>
    <HeaderItem title="Temps" number="00:00" />
    <HeaderItem title="Nombre de coups" number={tries} />

  </StyledHeader>
);

export default Header;
