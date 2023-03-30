import getMovie from '../../movieAPI';
import { useEffect, useState } from 'react';
import { Link, List } from './Home.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrending = async () => {
      const data = await getMovie('/trending/movie/week');
      setMovies(data.results);
      console.log(data);
    };

    fetchTrending();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </List>
    </main>
  );
};

export default Home;
