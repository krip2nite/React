import { FC } from 'react';
import logo from '../assets/image.png'
import SearchBar from './SearchBar'
import { ColorModeButton } from './ui/color-mode'
import { Image, HStack } from '@chakra-ui/react'

interface Props{
  onSubmitText: (text: string) => void;
}

const Nav: FC<Props> = ({onSubmitText}) => {
  return (
    <HStack justifyContent={"space-between"}>
        <Image src={logo} boxSize={"10"}/>
        <SearchBar onSubmitText={(text: string)=> onSubmitText(text)}></SearchBar>
        <ColorModeButton/>
    </HStack>
  )
}

export default Nav