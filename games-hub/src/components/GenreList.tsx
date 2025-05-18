import { useEffect, useState } from 'react'
import api from '../services/api-client'
import {  Text } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { Genre, FetchGenersResponse} from '../model/fetch-gener-types'
const GenreList = () => {
    const [genres, setGenres] = useState<Genre[]>()
    const [error, setError] = useState<string>('');
    useEffect(()=>{
       api.get<FetchGenersResponse>("/genres")
       .then(res => setGenres(res.data.results))
       .catch((e: AxiosError) => {
        setError(e.message);
       })
    }, [])
    
  return (
    <>
    {error? <Text color={"red"} fontSize={"2rem"}>{error}</Text>: <ul>
      {genres?.map(g => <li key={g.id}>{g.name}</li>)}
      </ul>}
    </>
  )
}

export default GenreList