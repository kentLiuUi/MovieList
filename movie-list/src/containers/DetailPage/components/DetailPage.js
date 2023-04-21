import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setDetailData } from "../redux/DetailReducer";

function DetailPage(props) {
  const { detailData, setDetailData } = props;

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/502356?api_key=cf5b35c889b9f92a5051a5c043a4ea36"
    )
      .then((response) => response.json())
      .then((data) => setDetailData(data));
  }, [setDetailData]);

  if (!detailData) {
    return <p>Loading...</p>;
  }

  const posterPath = `https://image.tmdb.org/t/p/w500${detailData.poster_path}`;
  const backdropPath = `https://image.tmdb.org/t/p/w500${detailData.backdrop_path}`;

  const genreColors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#9e9e9e",
    "#607d8b",
  ];

  const genres = detailData.genres || [];
  const genresList = genres.map((genre, index) => (
    <span
      key={genre.id}
      className="genre"
      style={{
        backgroundColor: genreColors[index % genreColors.length],
      }}
    >
      {genre.name}
    </span>
  ));

  const productionCompaniesList = detailData.production_companies
    ? detailData.production_companies.map((company) => {
        const logoPath = company.logo_path
          ? `https://image.tmdb.org/t/p/w500${company.logo_path}`
          : null;
        return (
          <div key={company.id}>
            {logoPath ? (
              <img src={logoPath} alt={company.name} />
            ) : (
              <p>{company.name}</p>
            )}
          </div>
        );
      })
    : "";

  // function to display the color of rating based on the number
  const getColor = () => {
    if (detailData.vote_average >= 8) {
      return "green";
    } else if (detailData.vote_average >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <section className="detailPageContainer">
      <img className="backgroundImg" src={backdropPath} alt="background" />
      <div className="backBtn">Back</div>
      <div className="detailContainer">
        <img className="moviePoster" src={posterPath} alt={detailData.title} />
        <div className="movieInfo">
          <div className="titleContainer">
            <h2 className="title">{detailData.title}</h2>
            <p className={getColor()}>
              {detailData.vote_average && detailData.vote_average.toFixed(1)}
            </p>
          </div>
          <div className="detailInfoContainer">
            <div className="releaseDate">
              <span className="greyTilte">Release Date</span>
              <span>{detailData.release_date}</span>
            </div>
            <div className="genresList">
              <span className="greyTilte">Genres</span>
              <span>{genresList}</span>
            </div>
            <p className="overview">{detailData.overview}</p>
            <div className="productionCompanies">{productionCompaniesList}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    detailData: state.detailData,
  };
}

const mapDispatchToProps = {
  setDetailData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
