import { types } from '../action/type';

const initialState = {
  message: null,
};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DEFAULT: {
      return {
        ...state,
        message: 'Hello redux',
      };
    }

    default:
      return state;
  }
};

export default defaultReducer;
