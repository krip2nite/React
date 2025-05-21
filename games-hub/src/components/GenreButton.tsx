// import React from 'react'
// import { Genre } from '../model/fetch-genre-types';
// import { Button, List, HStack, Avatar } from '@chakra-ui/react';

// interface Props{
//     genre: Genre;
//     children?: React.ReactNode;
// }

// const GenreButton: React.FC<Props> = ({genre})  => {
//   return (
//      <List.Root>
//         <List.Item>
//             <HStack gap="3">
//                 <Button size="xl" variant="subtle" justifyContent='center'> {genre.name}
//                     <Avatar.Root shape="square" size = 'xl' >
//                         <Avatar.Fallback name={genre.name} />
//                         <Avatar.Image src={genre.image_background} height = {"100%"} objectFit={"cover"} alt={`image for game ${genre.name}`}/>
//                     </Avatar.Root>
//                 </Button>
//             </HStack>
//         </List.Item>
//      </List.Root>
//   )
// }

// export default GenreButton