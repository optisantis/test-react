import React from 'react'

import MainText from '../../../core/Ui/MainText'

import { Time } from './styles'

const Timer = ({ time }) => {

  return (
    <div>
      <MainText>{'Temps'}</MainText>
      <Time>{time}</Time>
    </div>
  )
}

export default Timer
