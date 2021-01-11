import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

import propTypes from 'prop-types'

function Card ({ movie, year }) {
    const { API_URL } = process.env

    if(!movie.genre) {
        movie.genre = {}
        movie.genre.slug = 'uncategorised'
    }

    return (
        <CardStyled>
            {movie.movie_poster && (
                <div className="poster">
                    <Image src={API_URL + movie.movie_poster.url} width={movie.movie_poster.width} height={movie.movie_poster.height} />
                </div>
            )}
            <div className="body">
                <h3>{ movie.movie_title } - {year}</h3>
                <p dangerouslySetInnerHTML={{ __html: movie.description }} />

                <Link href="/movies/[genre]/[slug]" as={`/movies/${movie.genre.slug}/${movie.slug}`}>
                    <a>More about this movie</a>
                </Link>
            </div>
        </CardStyled>
    )
}

Card.propTypes = {
    movie: propTypes.oneOfType([
        propTypes.object,
        propTypes.array
    ]),
    year: propTypes.number
}

Card.defaultProps = {
    year: 1984
}

const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }
        
        a {
            display: inline-block;
            margin: 20px 0;
        }
       
    }
`

export default Card
