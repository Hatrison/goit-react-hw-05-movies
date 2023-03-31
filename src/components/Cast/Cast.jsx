import getMovie from 'movieAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      const credits = await getMovie(`/movie/${movieId}/credits`);
      setCast(credits.cast);
      console.log(credits.cast);
    };

    fetchCredits();
  }, [movieId]);

  return (
    <>
      {cast?.length !== 0 && (
        <ul>
          {cast?.map(actor => (
            <li key={actor.id}>
              <Image
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={`${actor.name}`}
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      )}
      {cast?.length === 0 && (
        <div>We don't have any cast info for this movie</div>
      )}
    </>
  );
};

export default Cast;
