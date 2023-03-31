import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './SharedLayout/SharedLayout';
import Home from '../pages/Home';

const Movies = lazy(() => import('pages/Movies'));
const Movie = lazy(() => import('pages/Movie'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
