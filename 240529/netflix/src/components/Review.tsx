import React from "react";
import styled from "styled-components";

const ReviewSection = styled.div`
  background-color: #f8f9fa;
  color: ${(props) => props.theme.black.darker};
  margin-top: 20px;
  padding: 20px;
  width: 1620px;
  border-radius: 10px;
  p {
    width: 100%;
    padding: 10px;
    div {
      width: 100%;
    }
  }
`;

const ReviewTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.red};
`;

type ReviewProps = {
  reviews: {
    [key: number]: {
      author: string;
      content: string;
    }[];
  };
  movieId: number;
};

const Review = ({ reviews, movieId }: ReviewProps) => {
  return (
    <ReviewSection>
      <h3>😂😍Review😤😛</h3>
      {reviews[movieId]?.length > 0 ? (
        reviews[movieId].map((review, reviewIndex) => (
          <p key={reviewIndex}>
            <div>
              <ReviewTitle>🤩{review.author}</ReviewTitle> : {review.content}
            </div>
          </p>
        ))
      ) : (
        <p>No Reviews Available...</p>
      )}
    </ReviewSection>
  );
};

export default Review;
