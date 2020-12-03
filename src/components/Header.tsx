import styled from 'styled-components';
import HeaderItem from './HeaderItem';
import { formatTimer } from '../utils';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40em;
`;


type HeaderProps = {
  tries: number,
  timer: number
}

const Header = ({tries, timer}: HeaderProps) => (
  <StyledHeader>
    <HeaderItem title="Temps" number={formatTimer(timer)} />
    <HeaderItem title="Nombre de coups" number={tries} />

  </StyledHeader>
);

export default Header;
