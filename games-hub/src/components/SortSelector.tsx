import { Menu, Button, Portal } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FC, useState } from "react";
import sortOptions from "../config/sort-config.json"
export type SortOption = typeof sortOptions[0]
interface Props {
  selectedOrdering: SortOption | null;
  onSelectOrdering: (platform: SortOption | null) => void;
}

const SortSelector: FC<Props> = ({ onSelectOrdering, selectedOrdering}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
          <Menu.Root onExitComplete={() => setIsOpen(false)}>
            <Menu.Trigger asChild>
              <Button
                variant="outline"
                size="sm"
                borderWidth={0}
                onClick={() => setIsOpen(!isOpen)}
                marginBottom={3}
              >
                {` Order by ${selectedOrdering?.displayName || "Relevance"}`}
                {isOpen ? 
                    <FaChevronUp />
               : <FaChevronDown></FaChevronDown>}
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
               
                    <Menu.Content>
                     
                      {sortOptions.map((option) => (
                        <Menu.Item
                          key={option.value}
                          onClick={() => {
                            onSelectOrdering(option);
                            setIsOpen(false);
                          }}
                          value={option.value}
                        >
                          {option.displayName}
                        </Menu.Item>
                      ))}
                    </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
     
    </>
  );
};

export default SortSelector;