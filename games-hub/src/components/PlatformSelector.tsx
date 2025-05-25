import { Button, Menu, Portal } from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform'

const PlatformSelector = () => {
    const {error,data: platforms, isLoading} = usePlatform()
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" marginBottom={3}>
          Platforms
          <FaChevronDown></FaChevronDown>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map(p => <Menu.Item value={p.id}>{p.name}</Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector