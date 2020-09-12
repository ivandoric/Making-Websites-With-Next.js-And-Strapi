import { Box } from 'reflexbox'
import styled from '@emotion/styled'
import getConfig from 'next/config'
import { useState } from 'react'
import { parseCookies  } from 'nookies'

const { publicRuntimeConfig } = getConfig();

function AddMovie() {
    const [movieTitle, setMovieTitle] = useState('')
    const [movieSlug, setMovieSlug] = useState('')

    async function addMovie() {
        const jwt = parseCookies().jwt

        const movieInfo = {
            movie_title: movieTitle,
            slug: movieSlug
        }

        const add = await fetch(`${publicRuntimeConfig.API_URL}/movies`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieInfo)
        })

        const addResponse = await add.json()

        console.log(addResponse)
        
    }

    return (
        <AddMovieStyled>
            <Box variant="container">
                <Box as="h2" my={40}>
                    Add movie 
                </Box>

                <form>
                    <input type="text" onChange={e => setMovieTitle(e.target.value) } value={movieTitle}  placeholder="Movie title" /><br />
                    <input type="text" onChange={e => setMovieSlug(e.target.value) } value={movieSlug} placeholder="Movie slug" /><br />
                    <button type="button" onClick={() => addMovie() }>Add Movie</button>
                </form>
            </Box>
         </AddMovieStyled>
    )
}

const AddMovieStyled=styled.div`
    input {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #cccccc;
        border-radius: 4px;
    }
`

export default AddMovie