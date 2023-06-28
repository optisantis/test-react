import React, { useEffect, useMemo, useState } from 'react'

import ImageCard from '../../core/Ui/ImageCard'
import Title from '../../core/Ui/Title'
import MainButton from '../../core/Ui/MainButton'

import Attempts from './Attempts'
import Timer from './Timer'

import fruitsList from '../../helpers/fruitsList'

import { GridWrapper, HeaderWrapper, MainWrapper } from './styles'

const Game = () => {
  const [numberOfAttempts, setNumberOfAttempts] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [game, setGame] = useState([])
  const [gameStatus, setGameStatus] = useState('new')
  const [timer, setTimer] = useState(0)

  const isFinished = useMemo(() => game.filter((card) => card.status === 'idle').length === 0, [game])

  const formattedTimer = useMemo(() => {
    const date = new Date(null)
    date.setSeconds(timer)
    return date.toISOString().slice(14, 19)
  }, [timer])

  const handleShuffleCards = () => {
    const shuffledFruits = [...fruitsList, ...fruitsList]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
  
    setGame(shuffledFruits)
  }

  const handleChoiceACard = (card) => {
    setGameStatus('running')

    if (choiceOne && choiceTwo) {
      setChoiceOne(null)
      setChoiceTwo(null)
    }

    if (choiceOne && !choiceTwo) {
      setChoiceTwo(card)
    } else {
      setChoiceOne(card)
    }
  }

  const handleResetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  const handleResetGame = () => {
    setGameStatus('new')
    setTimer(0)
    handleShuffleCards()
    setNumberOfAttempts(0)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  useEffect(() => {
    handleShuffleCards()
  }, [])

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.type === choiceTwo.type) {
        setGame((prevCards) => {
          return prevCards.map((card) => {
            if (card.type === choiceOne.type) {
              return { ...card, status: 'found' }
            } else {
              return card
            }
          })
        })

        handleResetTurn()
      }

      setNumberOfAttempts((prevTurns) => prevTurns + 1)
    }
  }, [choiceOne, choiceTwo])

  useEffect(() => {
    if (gameStatus === 'running') {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)

      if (isFinished) {
        clearInterval(interval)
      }

      return () => clearInterval(interval)
    }
  }, [gameStatus, isFinished])

  const handleRandomCards = () => {
    return game.map(card => 
      <ImageCard
        card={card}
        key={card.id}
        handleChoice={handleChoiceACard}
        isFlipped={card === choiceOne || card === choiceTwo || card.status === 'found'}
      />
    )
  }
    
  return (
    <MainWrapper>
      <HeaderWrapper>
        <Timer time={formattedTimer}/>
        <Attempts numberOfAttempts={numberOfAttempts}/>
      </HeaderWrapper>
      <Title>{'Cliquez sur une carte pour commencer'}</Title> 
      <GridWrapper>
        {handleRandomCards()}
      </GridWrapper>
      <MainButton 
        text={'Réinitialiser'}
        action={handleResetGame}
      />
    </MainWrapper>
  )
}

export default Game
