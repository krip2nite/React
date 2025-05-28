import './App.css'
import { Grid, GridItem, Stack} from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
// import ParentPlatform from './model/ParentPlatform'
import GameQuery from './model/GameQuery'
import SortSelector from './components/SortSelector'

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<string | null>(null);  
  // const [selectedPlatform, setSelectedPlatform] = useState<ParentPlatform | null>(null);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid templateAreas={{
      base: '"nav" "main"' ,
      md: '"nav nav" "aside main"'
    }}>
      <GridItem area="nav" bg="white" ><Nav></Nav>
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside">
          <GridItem area="aside" paddingX="5" ></GridItem>
          {/* <GenreList selectedGenre={selectedGenre} onSelectGenre={(selectedGenre) => setSelectedGenre(selectedGenre)}></GenreList> */}
        <GenreList
            selectedGenre={gameQuery.genreName}
            onSelectGenre={(genreName: string | null) =>
              setGameQuery({ ...gameQuery, genreName })
            }
          />
        </GridItem>
      </Stack>
      <GridItem area="main">
        {/* <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(selectedPlatform) => setSelectedPlatform(selectedPlatform)} ></PlatformSelector>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}></GameGrid> */}
       <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPlatform={gameQuery.platform}
        ></PlatformSelector>
        <SortSelector onSelectOrdering={(option) => setGameQuery({ ...gameQuery, ordering: option })} selectedOrdering={gameQuery.ordering}></SortSelector>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
