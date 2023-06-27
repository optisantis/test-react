import React from 'react'

import ImageCard from '../../core/Ui/ImageCard'
import Title from '../../core/Ui/Title'
import MainButton from '../../core/Ui/MainButton'

import Attempts from './Attempts'
import Timer from './Timer'

import fruitsList from '../../helpers/fruitsList'

import { GridWrapper, HeaderWrapper, MainWrapper } from './styles'

const Game = () => {

    const handleRandomCards = () => {
        return fruitsList.map((card) => 
             <ImageCard image={card.image} id={card.id}></ImageCard>
        )
    }
    

  return (
    <MainWrapper>
      <HeaderWrapper>
        <Timer time={'00:00'}/>
        <Attempts numberOfAttempts={'0'}/>
      </HeaderWrapper>
      <Title>{'Cliquez sur une carte pour commencer'}</Title> 
      <GridWrapper>
        {handleRandomCards()}
      </GridWrapper>
      <MainButton 
        text={'Réinitialiser'}
        action={console.log('todo')}
      />
    </MainWrapper>
  )
}

export default Game
