
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from './Navigation/DrawerNavigator';


// export default class App extends React.Component {
export default function App(){
 // render(){
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }

//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
