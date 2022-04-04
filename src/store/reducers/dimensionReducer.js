import ActionTypes from "../actionTypes";

const initialState = {
  age: "All",
  cost: {
    food: {
      active: false,
      min: "0",
      max: "200",
    },
    wood: {
      active: false,
      min: "0",
      max: "200",
    },
    gold: {
      active: false,
      min: "0",
      max: "200",
    },
  },
};

const dimensionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.dimension.CHANGE_AGE_DIMENSION: {
      const newState = { age: action.payload, cost: state.cost };
      return newState;
    }
    case ActionTypes.dimension.CHANGE_COST_DIMENSION: {
      const newState = {
        age: state.age,
        cost: {
          ...state.cost,
          [action.payload.name]: {
            ...state.cost[action.payload.name],
            min: action.payload.min,
            max: action.payload.max,
          },
        },
      };
      return newState;
    }
    case ActionTypes.dimension.ACTIVATE_COST_DIMENSION: {
      const newState = {
        age: state.age,
        cost: {
          ...state.cost,
          [action.payload.name]: {
            ...state.cost[action.payload.name],
            active: !state.cost[action.payload.name].active,
          },
        },
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default dimensionReducer;
