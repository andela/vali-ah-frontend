import { REQUEST_DEMO } from 'actions/demo';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DEMO:
      return {
        ...state,
        items: action.text,
      };
    default:
      return state;
  }
};
