import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,FlatList,Image,ScrollView,SafeAreaView } from 'react-native';
import {Electricty,Gas,Properties,Property_Category} from './data.js';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Property_Categories} from './Categories'
import {AllProperties} from './Category_Property'


export function Fav({navigation,route}){
  
  let property_var =Properties.filter((property_var) => {
    return property_var.isFav;
    });
  return(
    <View style={{flex:1,backgroundColor:"#70a687"}}>
      <FlatList
          data={property_var}
          keyExtractor={({ id }, index) => id}                              
          renderItem={({ item }) => (   
           
            <TouchableOpacity 
            style={{}}           
            >
              <Card containerStyle={{backgroundColor:item.color,paddingTop:15,
    paddingBottom:15,    
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'}} >
              <Card.Title style={{color:'black',}}>                
                    {item.title}{'\n'}                                       
                </Card.Title>
              <Card.Image source={{uri:item.imageUrl}}/>                
                <Text style={styles.text}>
                {'\n'}
                 {item.electricity==1?"Electricity: Yes":null}
                    {item.electricity==3?"Electricity: No":null}   
                    {item.electricity==2?"Electricity: No Information":null}&emsp;
                    {item.gas==1?"Gas: Yes":null}
                    {item.gas==3?"Gas: No":null}                                
                    {item.gas==2?"Gas: No Information":null}&emsp;                   
                                       
                </Text>
              </Card>
            </TouchableOpacity>
           
          )}
        />
    </View>
  )


}

const styles = StyleSheet.create({  
  text:{
    fontWeight:"bold",
    textAlign:"center",
  }
});