import { useState } from 'react'
import './App.css'
import { Tooltip } from './components/ui/tooltip'
import { Box } from '@chakra-ui/react'
import { ColorModeButton } from './components/ui/color-mode'

function App() {
  

  return (
    <>
    <Tooltip content={"Kuku"} contentProps={{background:"red"}}showArrow>
      <Box textAlign={"center"}>XXXXXXX</Box>
    </Tooltip>
    <ColorModeButton></ColorModeButton>
    </>
  )
}

export default App
