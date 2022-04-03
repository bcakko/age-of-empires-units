import ActionTypes from "../actionTypes";

const changeAgeDimension = (value) => {
  return { type: ActionTypes.dimension.CHANGE_AGE_DIMENSION, payload: value };
};

// ADD COST FILTER

const dimensionActions = {
  changeAgeDimension,
  // ADD COST FILTER
};

export default dimensionActions;
