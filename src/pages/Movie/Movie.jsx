import { Outlet, useLocation, useParams } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import {
  AdditionalContent,
  Description,
  Image,
  Link,
  MainContent,
} from './Movie.styled';
import { useEffect, useRef, useState } from 'react';
import getMovie from 'movieAPI';

const Movie = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await getMovie(`/movie/${movieId}`);
      setMovie(movie);
    };

    fetchMovie();
  }, [movieId]);

  return (
    <main>
      <Link to={backLink.current}>
        <MdOutlineArrowBack size="20px" color="black" />
        Go back
      </Link>
      {!movie && <div>Loading...</div>}
      {movie && (
        <>
          <MainContent>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <Description>
              <h1>
                {movie.original_title} ({movie.release_date.slice(0, 4)})
              </h1>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </Description>
          </MainContent>
          <AdditionalContent>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </AdditionalContent>
          <Outlet />
        </>
      )}
    </main>
  );
};

export default Movie;
