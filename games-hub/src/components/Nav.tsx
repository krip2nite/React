import logo from '../assets/image.png'
import { ColorModeButton } from './ui/color-mode'
import { Image, HStack } from '@chakra-ui/react'

const Nav = () => {
  return (
    <HStack justifyContent={"space-between"}>
        <Image src={logo} boxSize={"10"}/>
        <ColorModeButton/>
    </HStack>
  )
}

export default Nav