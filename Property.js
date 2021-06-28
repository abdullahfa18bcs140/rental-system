import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,FlatList,Image,ScrollView,SafeAreaView } from 'react-native';
import {Electricty,Gas,Properties,Property_Category} from './data.js';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export function Single_Property({navigation,route}) {
  let property_var = route.params;
  let imageUrl = property_var.imageUrl;

  let ingredients = property_var.Address;
  let steps = property_var.Owner;
  return (
    <SafeAreaView style={styles.screen}>
    <ScrollView style={{}}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />     
      
        <Text style={styles.text}>Address: </Text>
        <Text style={styles.text}>   {property_var.Address}     </Text>

      <Text style={styles.text}>Owner: </Text>
      <Text style={styles.text}>{property_var.Owner}</Text>      

    </ScrollView>
    </SafeAreaView>
    
  )
  }


  const styles = StyleSheet.create({
   
    image: {
    width: 600,
    height: 180,
    maxWidth: "100%",
    maxHeight: "100%",
    paddingTop:50,
    paddingBottom:50,    
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
   screen: {   
     maxWidth:"100%",
     flex:1,   
     backgroundColor:"#70a687"    
  },
  text:{
    fontWeight:"bold",
    textAlign:"center",
  }
});
