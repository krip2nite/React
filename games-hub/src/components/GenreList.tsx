import { Text, List, HStack, Avatar, Button, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import { FC } from "react";

interface Props {
  onSelectGenre: (genreslug: string) => void
  selectedGenre: string | null;
}

function getSelectedStyles(slug: string, selectedGenre: string| null) : {fontWeight: string, color: string}{
  return slug === selectedGenre ? {fontWeight: "bold", color: "red"} : {fontWeight: "normal", color: "initial"}
}

const GenreList : FC<Props> = ({onSelectGenre, selectedGenre}) => {
 const {data: genres, error, isLoading} = useGenre();
    
  return (
    <>
    {isLoading && <Spinner></Spinner>}
     {error? (
        <Text color="red" fontSize={"2.5rem"}>
          {error}
        </Text>
      ) : (
        <List.Root listStyle="none" maxHeight="85vh" overflow="auto">
          {genres.map((g) => (
            <List.Item key={g.id}>
              <HStack padding={2}>
                <Avatar.Root shape="rounded" size="lg">
                  <Avatar.Fallback name={g.name} />
                  <Avatar.Image src={g.image_background}/>
                </Avatar.Root>
                <Button {...getSelectedStyles(g.slug, selectedGenre)} variant={"outline"} borderWidth="0" fontSize={"1.1rem"} paddingX="1"
                onClick= {()=> onSelectGenre(g.slug)}>{g.name}</Button> 
                {/* same for onSelectGenre.bind(undifined, g.slug) */}
              </HStack>
            </List.Item>
          ))}
        </List.Root>
      )}
    </>
  )
}

export default GenreList;