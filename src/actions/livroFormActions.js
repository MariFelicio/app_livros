import firebase from "@firebase/app";
import "@firebase/database";

export const SET_WHOLE_LIVRO = 'SET_WHOLE_LIVRO';
export const setWholeLivro = livro => ({
  type: SET_WHOLE_LIVRO,
  livro
});

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

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM
});

export const saveLivro = livro =>{
  const { currentUser } = firebase.auth();
  return async dispatch => {
    const db = firebase.database();
    if (livro.id) {
          await db.ref(`/users/${currentUser.uid}/livros/${livro.id}`)
                  .set(livro);
    } else {
          await db.ref(`/users/${currentUser.uid}/livros`)
                  .push(livro);
    }
    dispatch(livroSavedSuccess())
    
  }
}