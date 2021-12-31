import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  user: {
    fbId: null,
    name: null,
    email: null,
    type: 'driver',
    accessToken: null,
  },
};

function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_USER: {
      return produce(state, draft => {
        draft.user = {...state.user, ...action.payload};
      });
    }
    default:
      return state;
  }
}

export default app;
