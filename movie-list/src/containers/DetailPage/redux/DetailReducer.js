import redux, { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const APIKey = "api_key=cf5b35c889b9f92a5051a5c043a4ea36";
const detailURL = "https://api.themoviedb.org/3/movie/";

export const fetchData = () => {
  return (dispatch) => {
    // "502356" will be the movie id passed into this function when clicked
    fetch(detailURL + "502356" + "?" + APIKey)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_DATA_SUCCESS",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_DATA_ERROR",
          payload: error,
        });
      });
  };
};

const initialState = {
  data: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return { ...state, data: action.payload };
    case "FETCH_DATA_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
