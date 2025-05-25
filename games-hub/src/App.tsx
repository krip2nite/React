import './App.css'
import { Grid, GridItem, Stack} from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import ParentPlatform from './model/ParentPlatform'


function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);  
  const [selectedPlatform, setSelectedPlatform] = useState<ParentPlatform | null>(null);
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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(selectedGenre) => setSelectedGenre(selectedGenre)}></GenreList>
        </GridItem>
      </Stack>
      <GridItem area="main">
        <PlatformSelector onSelectPlatform={(selectedPlatform) => setSelectedPlatform(selectedPlatform)} ></PlatformSelector>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
