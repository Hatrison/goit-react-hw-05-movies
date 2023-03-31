import getMovie from 'movieAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getMovie(`/movie/${movieId}/reviews`);
      setReviews(reviews.results);
      console.log(reviews.results);
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews?.length !== 0 && (
        <ul>
          {reviews?.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews?.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
