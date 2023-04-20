import "../DetailPage.css";
import React, { useEffect } from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dataReducer from "../redux/DetailReducer";
import { fetchData } from "../redux/DetailReducer";
import {
  ConnectedMoviePoster,
  ConnectedMovieTitle,
  ConnectedMovieRating,
  ConnectedReleaseDate,
  ConnectedMovieOverview,
  //   ConnectedProductionCompanies,
} from "./DetailPage";

const store = createStore(dataReducer, applyMiddleware(thunk));

const DetailPageContainer = () => {
  useEffect(() => {
    store.dispatch(fetchData());
  }, []);

  return (
    <div className="DetailPageContainer">
      <ConnectedMoviePoster />
      <ConnectedMovieTitle />
      <ConnectedMovieRating />
      <ConnectedReleaseDate />
      <ConnectedMovieOverview />
      {/* <ConnectedProductionCompanies /> */}
    </div>
  );
};

export default DetailPageContainer;
