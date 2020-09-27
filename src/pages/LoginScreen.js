import React from 'react';
import {View, TextInput, Button, ActivityIndicator, Text, Alert } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from '@firebase/app';
import '@firebase/auth';


export default class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mail: '',
      password: '',
      isLoading: false,
      message: ''
    }
  }
  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyAOTGbQ6IpdYjOg95zg39uf3A3SaDoocqo",
      authDomain: "livros-b80c0.firebaseapp.com",
      databaseURL: "https://livros-b80c0.firebaseio.com",
      projectId: "livros-b80c0",
      storageBucket: "livros-b80c0.appspot.com",
      messagingSenderId: "370817555715",
      appId: "1:370817555715:web:18b4cc016e069d28019d36",
      measurementId: "G-WGRD555CMR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);   
   // if (firebase.apps.length === 0) {
   //   firebase.initializeApp({ firebaseConfig });
   // }
  }
  onChangeHandler(field, value){
    this.setState({
      [field]: value
    });
  }
  tryLogin(){
    this.setState({isLoading: true, message: ''});
    const {mail, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(user => {
        this.setState({message: 'Sucesso'});
      })
      .catch(error => {
        if(error.code === 'auth/user-not-found'){
          Alert.alert('Usuário não encontrado',
                      'Deseja criar um cadastro com as informações inseridas?',
                      [{
                        text: 'Não ',
                        onPress: () => {}
                      }, {
                        text: 'Sim',
                        onPress: () => {
                          firebase
                            .auth()
                            .createUserWithEmailAndPassword(mail, password)
                            .then(user => {
                              this.setState({message: 'Sucesso'});
                            })
                            .catch(error => {
                              this.setState({message: error.message})  
                              })
                        }
                      }],
                      {cancelable: false}
          )
        }
      this.setState({message: error.message})  
      })
      .then(() => this.setState({isLoading: false}));
  }
  renderMessage(){
    const {message} = this.state;
    if(!message)
      return null;
    return(
      <View>  
        <Text>{message}</Text>
      </View>
    );
  }
  renderButton(){
    if(this.state.isLoading)
      return <ActivityIndicator/>;
    return( 
      <Button 
        title="Entrar"
        onPress={() => this.tryLogin()}/>
      );
  }
  render() {
    return(
      <View>
        <FormRow>
           <TextInput 
              placeholder="email"
              value={this.state.mail}
              onChangeText={value => this.onChangeHandler('mail', value)}
           />
        </FormRow>
        <FormRow>
           <TextInput 
              placeholder="senha"
              secureTextEntry
              value={this.state.password}
              onChangeText={value => this.onChangeHandler('password', value)}
          />
        </FormRow>
        {this.renderButton() }          
        {this.renderMessage() }
      </View>
    )
  }
}