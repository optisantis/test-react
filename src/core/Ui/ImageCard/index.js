import React from 'react'

import { Image, FruitCard } from './styles'

const ImageCard = ({ image, id }) => {

  return (
    <FruitCard>
      <Image src={image} alt={id} />
    </FruitCard>
  )
}

export default ImageCard
