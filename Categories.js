import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,FlatList,Image,ScrollView,SafeAreaView } from 'react-native';
import {Electricty,Gas,Properties,Property_Category} from './data.js';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export function Property_Categories({navigation,route}){  
  return(
    <View style={styles.container}>
    <FlatList
          data={Property_Category}
          keyExtractor={({ id }, index) => id}
          horizontal={false}
          
          renderItem={({ item }) => (   
           
            <TouchableOpacity 
            style={{maxWidth:'100%', minWidth:'100%'}}
            onPress={() => navigation.navigate('Properties',item)}>
              <Card containerStyle={{backgroundColor:item.color,
                paddingTop:15,
                paddingBottom:15,    
                borderRadius:10,
                borderWidth: 1,
                borderColor: '#fff'}} >
                <Card.Title style={{color:"white"}}>                
                    {item.title}                                    
                </Card.Title>
              </Card>
            </TouchableOpacity>
           
          )}
        />        
{ 
    
  
}
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
    backgroundColor: '#70a687',
    padding: 8,

  }   
});