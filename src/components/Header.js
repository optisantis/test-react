import styled from 'styled-components';
import HeaderItem from './HeaderItem';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40em;
`;

const formatTimer = (timer) => {
  const sec_num = parseInt(timer, 10); // don't forget the second param
  const hours   = Math.floor(sec_num / 3600);
  const minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  const seconds = sec_num - (hours * 3600) - (minutes * 60);

  return `${ minutes < 10 ? "0" + minutes : minutes }:${ seconds < 10 ? "0" + seconds : seconds }`;
}

const Header = ({tries, timer}) => (
  <StyledHeader>
    <HeaderItem title="Temps" number={formatTimer(timer)} />
    <HeaderItem title="Nombre de coups" number={tries} />

  </StyledHeader>
);

export default Header;
