import React from "react";
import MovieCard from "./movie-card";
import WithLoading from "./loadingSpinner";
class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.movieList.map((el, i) => {
          return (
            <MovieCard title={el.title} image={el.image.url} rating={el.rating}>
              {" "}
            </MovieCard>
          );
        })}
      </div>
    );
  }
}

export default WithLoading(MovieList);
