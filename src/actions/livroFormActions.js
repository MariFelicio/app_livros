import firebase from "@firebase/app";
import "@firebase/database";

export const SET_FIELD = 'SET_FIELD'; //action type 
export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value, 
  }
}
export const LIVRO_SAVED_SUCCESS = 'LIVRO_SAVED_SUCCESS';
const livroSavedSuccess = () => ({
  type: LIVRO_SAVED_SUCCESS
});

export const saveLivro = livro =>{
  const { currentUser } = firebase.auth();
  return async dispatch => {  
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/livros`)
      .push(livro);
    dispatch(livroSavedSuccess())
  }
}