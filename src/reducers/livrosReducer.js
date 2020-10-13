import {SET_LIVROS} from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case SET_LIVROS:
        return action.livros;
    default:
      return state;
  }
}