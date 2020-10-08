//import { createAppContainer, createStackNavigator } from 'react-navigation';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginPage from './pages/LoginPage';
import LivrosPage from './pages/LivrosPage';
import LivroDetailPage from './pages/LivroDetailPage';
import LivroFormPage from './pages/LivroFormPage';


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={LoginPage} 
          screenOptions={{ title: "Livros",
           headerTintColor: 'white',
           headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5',
            },
           headerTitleStyle: {
            color: 'white',
            fontSize: 30,
           } 
          }}
       />      

        <Stack.Screen name="Main" component={LivrosPage} />

        <Stack.Screen name="LivroForm" component={LivroFormPage} />

        <Stack.Screen name="LivroDetail" component={LivroDetailPage}
         screenOptions= { ({ navigation }) => {          
           const { livro } = navigation.state.params;
              return {
               title: livro.title
              } 
            }
          }
        />
       
        
      </Stack.Navigator>
   </NavigationContainer>        
  )
}
