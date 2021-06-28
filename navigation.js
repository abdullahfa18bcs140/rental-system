import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Property_Categories} from './Categories'
import {AllProperties} from './Category_Property'
import {Single_Property} from './Property'
import {Fav} from './Favorite_Property' 

const Stack1=createStackNavigator();
function MyStack1(){
  return(
  <Stack1.Navigator>
    <Stack1.Screen name="Property Categories" component={Property_Categories}/>
    <Stack1.Screen name="Properties" component={AllProperties}/>
    <Stack1.Screen name="Property Details" component={Single_Property}/>
    
    
  </Stack1.Navigator>
  )
}

const Stack2=createStackNavigator();
function MyStack2(){
  return(
  <Stack2.Navigator>
    <Stack1.Screen name="Favorite Properties" component={Fav}/>
    
    
    
  </Stack2.Navigator>
  )
}
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Property Categories" component={MyStack1} /> 
      <Tab.Screen name="Favorites" component={MyStack2} />       
    </Tab.Navigator>
  );
}
const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Properties" component={MyTabs} />
      <Drawer.Screen name="Favorites" component={MyTabs} />
    </Drawer.Navigator>
  );
}