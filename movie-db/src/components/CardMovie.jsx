import React from 'react'
import { Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function CardMovie({movie}) {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-3 mt-5">
        <Link to={`/movie/${movie.id}`} >
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path} className="card__image" alt="cant load img" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {movie.original_title}</p>
              <p>تاريخ الاصدار:{movie.release_date}</p>
              <p>عدد المقيمين: {movie.vote_count}</p>
              <p>التقييم:{movie.vote_average} </p>
            </div>
          </div>
        </div>
        </Link>
    </Col >
  )
}

export default CardMovie