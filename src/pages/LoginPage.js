import React from 'react';
import {View, TextInput, Button, ActivityIndicator, Text, Alert } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from '@firebase/app';
import '@firebase/auth';
import {connect} from 'react-redux';
import {tryLogin} from '../actions'; 
import { StackActions } from '@react-navigation/native';


class LoginPage extends React.Component {
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
    const {mail: email, password} = this.state;
    this.props.tryLogin({email, password})
        .then(user => {
          if (user) 
        return this.props.navigation.dispatch(
            StackActions.replace('Main', {
              user: 'user',})
          );
          //  return this.props.navigation.replace('Main');
          
          this.setState({
            isLoading: false,
            message: ''
        });
      })
        .catch(error => {
          this.setState({
            isLoading: false, 
            message: this.getMessageByErrorCode(error.code)
          });
        });
  }
  getMessageByErrorCode(errorCode) {
		switch (errorCode) {
			case 'auth/wrong-password':
				return 'Senha incorreta';
			case 'auth/user-not-found':
				return 'Usuário não encontrado';
			default:
				return 'Erro desconhecido';
		}
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
export default connect(null, {tryLogin})(LoginPage)