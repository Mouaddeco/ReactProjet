import React from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { createAppContainer, } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'



import List from './src/screens/List';
import Form from './src/screens/Form';




    const Navigator = createStackNavigator({
      Form: { screen: Form },
      List: { screen: List },
      
  });   

    const App = createAppContainer(Navigator)

    export default App
