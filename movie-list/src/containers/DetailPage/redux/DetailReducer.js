import { SET_DETAIL_DATA } from "../../../constants";

// action creators
export function setDetailData(detailData) {
  return {
    type: SET_DETAIL_DATA,
    payload: detailData,
  };
}

// initial state
const initialState = {
  detailData: {},
};

// reducer
const detailPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL_DATA:
      return {
        ...state,
        detailData: action.payload,
      };
    default:
      return state;
  }
};

export default detailPageReducer;
