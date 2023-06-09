import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HeaderLine, HeaderThumb, Link } from './SharedLayout.styled';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <HeaderThumb>
        <HeaderLine>
          <Link to="/" state={{ from: location }}>
            Home
          </Link>
          <Link to="/movies" state={{ from: location }}>
            Movies
          </Link>
        </HeaderLine>
      </HeaderThumb>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
