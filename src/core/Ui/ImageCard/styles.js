import styled from 'styled-components'

export const Image = styled.img`
    width: 100%;
    ${props => !props.isFlipped && 'opacity: 0'};
`

export const FruitCard = styled.button`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    border: none;
    
    &: disabled {
        opacity: 0.3;
    }
`