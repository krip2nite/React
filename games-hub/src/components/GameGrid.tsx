import { useEffect, useState } from 'react'
import api from '../services/api-client'
import { Game, FetchGamesResponse } from '../model/fetch-game-types'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import { AxiosError } from 'axios'

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>()
    const [error, setError] = useState('');
    useEffect(()=>{
       api.get<FetchGamesResponse>("/games")
       .then(res => setGames(res.data.results))
       .catch((e: AxiosError) => {
        //TO DO USESTATE
        setError(e.message);
       })
    }, [])
    
  return (
  <>
    {!!error && <Text color="red.500"> Error: {error}</Text>}
    <SimpleGrid columns={{
        base: 1,
        sm: 2,
        md: 3
    }} gap={5} maxHeight={"80vh"} overflow={"auto"}>
        {games?.map(g => <GameCard key={g.id} game={g}>
            
            </GameCard>)}
    </SimpleGrid>
  </>
  )
}

export default GameGrid