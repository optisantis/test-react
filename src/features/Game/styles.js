import styled from 'styled-components'

export const GridWrapper = styled.div`
    display: grid;
    width: 95vw;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0.75em;
    row-gap: 0.75em;
`
export const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    justify-content: space-between;
    align-items: center;
`