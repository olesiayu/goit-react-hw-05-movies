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
    // console.log(actors);
  }, [movieID]);

  return (
    <>
      {review.length === 0 ? (
        <p>We don't have any reviews for this movie </p>
      ) : (
        <ul>
          {review.map(oneReview => (
            <li key={oneReview.id}>
              <h5>Author: {oneReview.author}</h5>
              <p>{oneReview.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
