import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  padding: 10px 15px 0 15px;
  justify-content: space-between;
  color: white;
`;

const StyledNumbers = styled.div`
  display: flex;
  padding: 10px 15px 0 15px;
  justify-content: space-between;
  font-size: 20px;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4);
  grid-gap: 20px 20px;
  width: 100%;
  margin: 30px 0 30px 0;

  @media (min-width: 576px) {
    max-width: 33.75rem;
  }

  @media (min-width: 768px) {
    max-width: 40rem;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;

const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.25s ease-in-out;
  background-color: white;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  background: rgb(9, 211, 172);
  color: rgb(41, 45, 62);
  font-size: 1em;
  margin: 1em;
  padding: 0.75em;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
`;

export {
  StyledHeader,
  StyledNumbers,
  StyledMain,
  StyledGridContainer,
  StyledCard,
  StyledIcon,
  StyledButton
};
