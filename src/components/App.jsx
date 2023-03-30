import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './SharedLayout/SharedLayout';
import Search from 'pages/Search';
import Movie from 'pages/Movie';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Search />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
