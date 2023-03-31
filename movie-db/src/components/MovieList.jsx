import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Pagination from './Pagination'

function MovieList({movies,getAllPages,PageCount}) {
  return (
    <Row className='mt-3'>
        {movies.length>=1?(movies.map((movie)=>
        {
            return(
                <CardMovie key={movie.id} movie={movie} />
            )
        })):<h3>لا يوجد افلام</h3>}
        {movies.length>=1?(<Pagination getAllPages={getAllPages} PageCount={PageCount} />):null}
        
    </Row>
  )
}

export default MovieList