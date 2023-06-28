import React from 'react'

import { Button } from './styles'


const MainButton = ({ text, action }) => {

  return (
    <Button onClick={action}>
      {text}
    </Button>
  )
}

export default MainButton
