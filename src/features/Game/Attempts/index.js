import React from 'react'

import MainText from '../../../core/MainText'

import { Count } from './styles'

const Attempts = ({ numberOfAttempts }) => {

  return (
    <div>
      <MainText>{'Nombres de coups'}</MainText>
      <Count>{numberOfAttempts}</Count>
    </div>
  )
}

export default Attempts
