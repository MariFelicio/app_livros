//import livrosMock from '../../series.json'
import {SET_LIVROS} from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_LIVROS:
        return action.livros;
    default:
      return state;
  }
}