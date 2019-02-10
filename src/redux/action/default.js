import { types } from './type';

export const triggerDefault = () => (dispatch) => {
  dispatch({
    type: types.DEFAULT,
  });
};
