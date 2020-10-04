//import { createAppContainer, createStackNavigator } from 'react-navigation';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './pages/LoginPage';
import LivrosPage from './pages/LivrosPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        } }}
      screenOptions={{ title: "Main",
       
        }}
        >          

        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Main" component={LivrosPage} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
      
  }
