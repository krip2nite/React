import { FC } from 'react';
import logo from '../assets/image.png'
import SearchBar from './SearchBar'
import { ColorModeButton } from './ui/color-mode'
import { Image, HStack } from '@chakra-ui/react'

const Nav: FC = () => {
  return (
    <HStack justifyContent={"space-between"}>
        <Image src={logo} boxSize={"10"}/>
        <SearchBar />
        <ColorModeButton/>
    </HStack>
  )
}

export default Nav