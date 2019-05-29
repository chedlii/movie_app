import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import StarRating from "./rateComponent";

// const RenderRate = props => {
//   let starRate = [];

//   for (let i = 0; i < 5; i++) {
//     if (i < props.rating) {
//       starRate.push(<i class="fas fa-star" />);
//     } else {
//       starRate.push(<i class="far fa-star" />);
//     }
//   }

//   return starRate;
// };

const MovieCard = props => {
  return (
    <div className="col-lg-3 mt-3 mb-3">
      {props.children}
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
        </CardBody>
        <img width="100%" height="270em" src={props.image} />
        <CardBody>
          <CardText>
            <StarRating rating={props.rating} rate={() => {}} />
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
