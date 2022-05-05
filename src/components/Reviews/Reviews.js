import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from 'services/movies-api';

export default function Reviews() {
  const { movieID } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMovieReviews(movieID).then(rewiews => {
      setReview([...rewiews.results]);
    });
  }, [movieID]);

  return (
    <>
      {review.length === 0 ? (
        <p>We don't have any reviews for this movie </p>
      ) : (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <h5>Author: {author}</h5>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
