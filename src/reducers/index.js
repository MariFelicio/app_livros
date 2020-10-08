import  {combineReducers} from 'redux';
import userReducer from './userReducer';
import livroFormReducer from './livroFormReducer';
import livrosReducer from './livrosReducer';

export default combineReducers({
  user: userReducer,
  livroForm: livroFormReducer,
  livros: livrosReducer,
});