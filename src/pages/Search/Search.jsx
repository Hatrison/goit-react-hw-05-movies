import { Field, Formik } from 'formik';
import getMovie from 'movieAPI';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { SubmitBtn, Form, Link, List } from './Search.styled';

const initialValues = {
  search: '',
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (search === '') {
      return;
    }

    const searchMovies = async () => {
      const fetchedMovies = await getMovie('/search/movie', `query=${search}`);
      setMovies(fetchedMovies.results);
    };

    searchMovies();
  }, [search, navigate]);

  return (
    <main>
      <Formik
        initialValues={initialValues}
        onSubmit={({ search }, actions) => {
          setSearchParams({ search: search });
          actions.resetForm();
        }}
      >
        <Form>
          <Field type="text" name="search" />
          <SubmitBtn type="submit">Search</SubmitBtn>
        </Form>
      </Formik>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </List>
    </main>
  );
};

export default Search;
