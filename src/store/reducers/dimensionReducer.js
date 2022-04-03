import ActionTypes from "../actionTypes";

const initialState = {
  age: "All",
  cost: { food: "200", wood: "200", gold: "200" },
};

const dimensionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.dimension.CHANGE_AGE_DIMENSION: {
      const newState = { age: action.payload, cost: state.cost };
      return newState;
    }
    case ActionTypes.dimension.CHANGE_COST_DIMENSION: {
      const newState = { age: state.age, cost: {...state.cost, [action.payload.name]: action.payload.number} };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default dimensionReducer;
