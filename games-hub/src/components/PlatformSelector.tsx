import { Button, Menu, Portal, Spinner } from '@chakra-ui/react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform'
import ParentPlatform from '../model/ParentPlatform'
import { FC, useState } from 'react'

interface Props{
    onSelectPlatform: (selectedPlatform: ParentPlatform) => void;
    selectedPlatform: ParentPlatform | null;
}

const PlatformSelector: FC<Props> = ({onSelectPlatform, selectedPlatform})=> {
    const {error,data: platforms, isLoading} = usePlatform()
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
    {isLoading && <Spinner/>}
    {!error && <Menu.Root onExitComplete={() => setIsOpen(false)}>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" marginBottom={3} onClick={() => setIsOpen(!isOpen)}>
          {selectedPlatform?.name || "Platforms"}
          {isOpen ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map(p => <Menu.Item value={p.id} 
            onClick={() => {onSelectPlatform(p), setIsOpen(false)}}>{p.name}</Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    }
    </>
  )
}

export default PlatformSelector