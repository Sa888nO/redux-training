const defaultState = {
  cash: 100,
};

const addCash = "ADD_CASH";
const getCash = "GET_CASH";

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addCash:
      return { ...state, cash: state.cash + action.payload };
    case getCash:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAction = (payload) => ({
  type: addCash,
  payload: payload,
});
export const getCashAction = (payload) => ({
  type: getCash,
  payload: payload,
});
