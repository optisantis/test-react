import React from "react"

import { Image, FruitCard } from "./styles"

const ImageCard = ({
  card, 
  handleChoice, 
  isFlipped, 
}) => {

  return (
    <FruitCard onClick={() => handleChoice(card)} disabled={card.status === 'found'}>
      <Image src={card.image} alt={card.type} isFlipped={isFlipped} />
    </FruitCard>
  )
}

export default ImageCard
