import { connect } from "react-redux";
import { fetchData } from "../redux/DetailReducer";

const imageUrl = "https://image.tmdb.org/t/p/w500";

// display movie poster
const MoviePoster = ({ poster }) => (
  <div>
    <img src={imageUrl + poster} alt={poster} />
  </div>
);

// display movie title
const MovieTitle = ({ title }) => <h2>{title}</h2>;

// display movie rating
const MovieRating = ({ rating }) => (
  <span className={getColor(rating)}>{rating.toFixed(1)}</span>
);

// function to display the color of rating based on the number
const getColor = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

// display release date
const ReleaseDate = ({ date }) => (
  <div>
    <span>Release Date</span>
    <span>{date}</span>
  </div>
);

// display genre
const DetailGenre = ({ genre }) => {};

const MovieOverview = ({ overview }) => (
  <div>
    <p>{overview}</p>
  </div>
);

// display production company

// const ProductionCompanies = ({ companies }) => {
//   return companies.map((company) => {
//     return company.logo_path === null ? (
//       <span key={company.id}>{company.name}</span>
//     ) : (
//       <img src={imageUrl + company.logo_path} alt={company.name} />
//     )
//   })
// }

const mapStateToProps = (state) => ({
  poster: state.data.poster_path,
  title: state.data.title,
  rating: state.data.vote_average,
  date: state.data.release_date,
  overview: state.data.overview,
  companies: state.data.production_companies,
  error: state.error,
});

export const ConnectedMoviePoster = connect(mapStateToProps)(MoviePoster);
export const ConnectedMovieTitle = connect(mapStateToProps)(MovieTitle);
export const ConnectedMovieRating = connect(mapStateToProps, { getColor })(
  MovieRating
);
export const ConnectedReleaseDate = connect(mapStateToProps)(ReleaseDate);
export const ConnectedMovieOverview = connect(mapStateToProps)(MovieOverview);
// export const ConnectedProductionCompanies = connect(mapStateToProps)(
//   ProductionCompanies
// )

export default connect(null, { fetchData })(
  ConnectedMoviePoster,
  ConnectedMovieTitle,
  ConnectedMovieRating,
  ConnectedReleaseDate,
  ConnectedMovieOverview
  // ConnectedProductionCompanies
);
