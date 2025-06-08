import { Box, Input, InputGroup } from "@chakra-ui/react"
import { useRef, FC } from "react"
import { LuSearch } from "react-icons/lu"
import useGameQueryStore from '../../state-management/store'
const SearchBar: FC = () => {
    const inputElement = useRef<HTMLInputElement>(null);
    const onSubmitText = useGameQueryStore(s => s.setSearch)
  return (
    <Box width="100%" as="form" onSubmit={(event) => {
        event.preventDefault();
        onSubmitText(inputElement.current?.value ?? "")}}>
        <InputGroup flex="1" startElement={<LuSearch/>}>
            <Input ref={inputElement} placeholder="Search games..." borderRadius={"30px"}/>
        </InputGroup>
    </Box>
  )
}

export default SearchBar