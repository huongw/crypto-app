export const INITIAL_STATE = {
  isLoading: false,
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "FETCH_ERROR":
      return {
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
