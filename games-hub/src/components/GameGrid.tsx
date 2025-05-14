import { useEffect, useState } from 'react'
import api from '../services/api-client'
import { Game, FetchGamesResponse } from '../model/fetch-game-types'
import { Box, SimpleGrid, Text, Image} from '@chakra-ui/react'

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>()
    useEffect(()=>{
       api.get<FetchGamesResponse>("/games")
       .then(res => setGames(res.data.results)) 
    }, [])
    
  return (
    <SimpleGrid columns={{
        base: 1,
        sm: 2,
        md: 3
    }} gap={5} maxHeight={"80vh"} overflow={"auto"}>
        {games?.map(g => <Box key={g.id}>
            <Image src={g.background_image} alt={`image of ${g.name}`} height={"100%"}></Image>
            <Text>{g.name}</Text>
            </Box>)}
    </SimpleGrid>
  )
}

export default GameGrid