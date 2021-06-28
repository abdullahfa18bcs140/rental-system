import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {MyDrawer} from './navigation'

export default function App() { 
  return (
    <NavigationContainer>
    <MyDrawer/>
    </NavigationContainer>
  )
      
}

