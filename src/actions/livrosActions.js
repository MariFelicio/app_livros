import firebase from 'firebase';

export const SET_LIVROS = 'SET_LIVROS'; 
const setLivros = livros => ({
    type: SET_LIVROS,
    livros,
});

export const watchLivros = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
        .database()
        .ref(`/users/${currentUser.uid}/livros`) 
        .on('value', snapshot => {
          const livros = snapshot.val();
          const action = setLivros(livros);
          dispatch(action)
        });
  }
}