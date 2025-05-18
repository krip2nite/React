import React from 'react'
import { Game } from '../model/fetch-game-types';
import { Card, Image} from '@chakra-ui/react';
interface Props{
    game: Game;
}
const GameCard: React.FC<Props> = ({game}) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image height = {"100%"} objectFit={"cover"}
        src={game.background_image}
        alt={`image for game ${game.name}`}
      />
      <Card.Body gap="2" background={game.metacritic > 90 ? 'green' : 'lightgrey'}>
        <Card.Title color={game.metacritic > 90 ? 'white' : 'black'}>{game.name}</Card.Title>
        <Card.Description color={game.metacritic > 90 ? 'white' : 'black'}>
          {`Working Platforms:  ${game.platforms.map(p=> p.platform.name)}`}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard