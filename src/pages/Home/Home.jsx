import getMovie from '../../movieAPI';
import { useEffect, useState } from 'react';
import { Link, List } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </List>
    </main>
  );
};

export default Home;
