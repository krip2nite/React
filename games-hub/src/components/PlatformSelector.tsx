import { Button, Menu, Portal, Spinner } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform'
import ParentPlatform from '../model/ParentPlatform'
import { FC } from 'react'

interface Props{
    onSelectPlatform: (selectedPlatform: ParentPlatform) => void;
    selectedPlatform: ParentPlatform | null;
}

const PlatformSelector: FC<Props> = ({onSelectPlatform, selectedPlatform})=> {
    const {error,data: platforms, isLoading} = usePlatform()
  return (
    <>
    {isLoading && <Spinner/>}
    {!error && <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" marginBottom={3}>
          {selectedPlatform?.name || "Platforms"}
          <FaChevronDown></FaChevronDown>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map(p => <Menu.Item value={p.id} 
            onClick={() => onSelectPlatform(p)}>{p.name}</Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    }
    </>
  )
}

export default PlatformSelector