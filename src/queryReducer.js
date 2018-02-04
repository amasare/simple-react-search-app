const initialState = '';

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_QUERY':
      return action.query;
    default:
      return initialState;
  }
};

export default queryReducer;

