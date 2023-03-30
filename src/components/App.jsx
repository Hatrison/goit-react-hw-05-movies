import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './SharedLayout/SharedLayout';
import Search from 'pages/Search';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
};
