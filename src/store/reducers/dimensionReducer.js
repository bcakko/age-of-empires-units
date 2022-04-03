import ActionTypes from "../actionTypes";

const initialState = { age: "" };

const dimensionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.dimension.CHANGE_AGE_DIMENSION: {
      const newState = { age: action.payload };
      return newState;
    }
    // ADD COST FILTER
    default: {
      return state;
    }
  }
};

export default dimensionReducer;
