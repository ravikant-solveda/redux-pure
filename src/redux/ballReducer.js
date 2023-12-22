const initialState = {
    balls: 7000,
  };
  
  const BallReducer = (state = initialState, action) => {
    switch (action.type) {
      case "BUY_BALL":
        return { ...state, balls: state.balls - action.payload};
      case "SELL_BALL":
        return { ...state, balls: state.balls + 1 };
      default:
        return state;
    }
    // return state
  };
  
  export default BallReducer;