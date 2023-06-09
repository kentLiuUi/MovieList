import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setDetailData } from "../redux/DetailReducer";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../DetailPage.sass";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  GENRE_COLORS,
  API_KEY,
  IMAGE_URL,
  DETAIL_URL,
} from "../../../constants";

function DetailPage(props) {
  const { detailData, setDetailData } = props;
  const navigate = useNavigate();

  let { movieId } = useParams();
  useEffect(() => {
    console.log(movieId);
    fetch(DETAIL_URL + movieId + "?api_key=" + API_KEY)
      .then((response) => response.json())
      .then((data) => setDetailData(data));
  }, [setDetailData]);

  if (!detailData) {
    return <p>Loading...</p>;
  }

  const posterPath = IMAGE_URL + detailData.poster_path;
  const backdropPath = IMAGE_URL + detailData.backdrop_path;

  const genres = detailData.genres || [];
  const genresList = genres.map((genre, index) => (
    <span
      key={genre.id}
      className="genre"
      style={{
        backgroundColor: GENRE_COLORS[index % GENRE_COLORS.length],
      }}
    >
      {genre.name}
    </span>
  ));

  const productionCompaniesList = detailData.production_companies
    ? detailData.production_companies.map((company) => {
        const logoPath = company.logo_path
          ? IMAGE_URL + company.logo_path
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

  // let voteAverageColor;
  // if (detailData.vote_average >= 8) {
  //   voteAverageColor = "green";
  // } else if (detailData.vote_average >= 5) {
  //   voteAverageColor = "orange";
  // } else {
  //   voteAverageColor = "red";
  // }

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

  const HandleBack = () => {
    navigate(-1);
  };

  return (
    <section className="detailPageContainer">
      <img className="backgroundImg" src={backdropPath} alt="background" />
      <div className="backBtn" onClick={HandleBack}>
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ffffff" }} />
        <span className="backText">Back</span>
      </div>

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

DetailPage.propTypes = {
  detailData: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    production_companies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        logo_path: PropTypes.string,
      })
    ),
  }),
  setDetailData: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  console.log("mapStatesToProps", state);
  return {
    detailData: state.detailPageReducer.detailData,
  };
}

const mapDispatchToProps = {
  setDetailData,
};

// const mapDispatchToProps = (dispatch) => ({
//   setDetailData: (detailData) => dispatch(setDetailData(detailData)),
// })

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
