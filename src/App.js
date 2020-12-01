import styled from 'styled-components';

import Grid from "./components/Grid";
import Header from "./components/Header"

const Instructions = styled.p`
  text-align: center;
`;

export default function Memory() {
  return (
    <main>
      <Header />
      <Instructions>
        Cliquez sur une carte pour commencer
      </Instructions>
      <Grid />
    </main>
  );
}
