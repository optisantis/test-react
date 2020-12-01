import styled from 'styled-components';

const Title = styled.p`
  color: #9ca1b6;
  font-size: 0.8em;

`;

const Number = styled.p`
  font-size: 1.4em;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
`;

const HeaderItem = ({ title, number }) => (
  <div>
    <Title>
      { title }
    </Title>
    <Number>
      { number }
    </Number>
  </div>
);


export default HeaderItem;
