import firebase from "@firebase/app";
import "@firebase/database";
import { Alert } from 'react-native';

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

export const deleteLivro = livro => {
  return dispatch => {
    return new Promise ((resolve, reject ) => {
      Alert.alert('Deletar', 
                  `Deseja deletar o livro ${livro.title}`, 
                  [{
                    text: 'Não',
                    onPress: () => {
                      resolve(false)
                    },
                  }, {
                     text: 'Sim',
                     onPress: async () => {
                       const { currentUser} = firebase.auth();
                       try {
                            await firebase
                                .database()
                                .ref(`/users/${currentUser.uid}/livros/${livro.id}`)
                                .remove();
                            resolve(true);
                       } catch (e) {
                         reject(e);
                       }
                       
                     },
                  }],
                  { cancelable: false }
                )
    })
  }
}