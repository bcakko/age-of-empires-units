import ActionTypes from "../actionTypes";

const changeAgeDimension = (value) => {
  return { type: ActionTypes.dimension.CHANGE_AGE_DIMENSION, payload: value };
};
const changeCostDimension = (value) => {
  return { type: ActionTypes.dimension.CHANGE_COST_DIMENSION, payload: value };
};
const activateCostDimension = (value) => {
  return { type: ActionTypes.dimension.ACTIVATE_COST_DIMENSION, payload: value };
};

const dimensionActions = {
  changeAgeDimension,
  changeCostDimension,
  activateCostDimension,
};

export default dimensionActions;
