import { Flex, Box } from 'reflexbox'
import Select from 'react-select'
import {useQuery, useQueryClient} from 'react-query'
import {useState} from 'react'

const { API_URL } = process.env

const getMovies = async(key) => {
    console.log(key)
    const genreId = key.queryKey[1].genre
    const actorsIds = key.queryKey[2].actors.map(id => `actors.id=${id}`)
    console.log(actorsIds)

    const actorsQueryString = actorsIds.join('&')
    console.log(actorsQueryString)

    if(genreId && actorsQueryString) {
        const res = await fetch(`${API_URL}/movies?genre.id=${genreId}&${actorsQueryString}`)
        return res.json()
    }

    if(genreId) {
        const res = await fetch(`${API_URL}/movies?genre.id=${genreId}`)
        return res.json()
    }

    if(actorsQueryString) {
        const res = await fetch(`${API_URL}/movies?${actorsQueryString}`)
        return res.json()
    }

    const res = await fetch(`${API_URL}/movies`)
    return res.json()
}

const FilterMovies = ({ movies, actors, genres }) => {
    const queryClient = useQueryClient()
    const [genreId, setGenreId] = useState(null)
    const [actorsIds, setActors] = useState([])
    const {data, status} = useQuery(['movies', {genre: genreId}, {actors: actorsIds}], getMovies, {initialData: movies})

    return (
        <>
            <Box variant="container">
                <Box as="h2" my={40}>Filter movies</Box>
    
                <Flex mb={100}>
                    <Box width={200} mr={20}>
                        <Select
                            getOptionLabel={option => `${option.first_name} ${option.last_name}`}
                            getOptionValue={option => option.id}
                            options={actors}
                            instanceId="actors"
                            isMulti
                            placeholder="Filter by Actors"
                            onChange={values => setActors(values.map(actor => actor.id))}
                        />
                        <br />
                        <Select 
                            getOptionLabel={option => option.title} 
                            getOptionValue={option => option.id} 
                            options={genres} 
                            instanceId="genres" 
                            placeholder="Filter by Genres"
                            isClearable
                            onChange={value => setGenreId(value ? value.id : null)}
                        />
                    </Box>
                    <Box>
                        {status === 'loading' && <div>I'm loading your movies</div>}
                        {status === 'error' && <div>Something went wrong</div>}

                        {status === 'success' && data.map(movie => (
                            <Box key={movie.id} p={10}>
                                <strong>{movie.movie_title}</strong> - {movie.genre ? movie.genre.title : null}<br />

                                {movie.actors.length > 0 && movie.actors.map(actor => (
                                    <small key={actor.id}>{actor.first_name} {actor.last_name} &nbsp;</small>
                                ))}

                            </Box>
                        ))}
                    </Box>
                    
                </Flex>
            </Box>
        </>
    )
}


export async function getServerSideProps() {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/movies`)
    const moviesData = await res.json()

    const resActors = await fetch(`${API_URL}/actors`)
    const actorsData = await resActors.json()

    const resGenres = await fetch(`${API_URL}/genres`)
    const genresData = await resGenres.json()

    return {
        props: {
            movies: moviesData,
            actors: actorsData,
            genres: genresData
        },
    }
}

export default FilterMovies