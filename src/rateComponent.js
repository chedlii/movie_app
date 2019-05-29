import React from "react";

const StarRating = ({ rating, rate }) => {
  let starRate = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starRate.push(<i onClick={() => rate(i + 1)} class="fas fa-star" />);
    } else {
      starRate.push(<i onClick={() => rate(i + 1)} class="far fa-star" />);
    }
  }
  return <div>{starRate}</div>;
};

export default StarRating;
