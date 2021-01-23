import React from 'react'
import {View, Button, Text, TextInput,StyleSheet,Alert, TouchableOpacity, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';



class List extends React.Component{
    constructor(props) {
        super(props);   
        this.state = {
            flatListData:flatListData,
            nomArticle:'',
            quantité:'',
            prix:'',
            
        };          
    }
render(){

    
    const { navigation } = this.props;
    const response =[];

    const { navigate } = this.props.navigation;
    response.push(
        {
        nom:navigation.getParam('nomArticle', 'NO-User'),
        type:navigation.getParam('quantité', 'NO-User'),
    },
    )
     
   // const nom = navigation.getParam('nom', 'NO-User');
    //const type = navigation.getParam('type', 'NO-User');   

    return( <View style={styles.container}>
        

         <FlatList
         
            data={ flatListData }
            keyExtractor={ item => item.nomArticle }
            renderItem={({ item }) => {
              return (
        
                <TouchableOpacity
                  onPress={() => 
                    navigation.navigate('MapDetailScreen', {nomArticle:item.nomArticle,quantité:item.quantité,})
                }
                >
                   <ListItem tintColor='black' style={styles.flatListItem} >
                 <Text>{item.nomArticle}</Text>
                 


                    
                 
                  </ListItem >
                 
              </TouchableOpacity>
            
              )
            }}
          />
        <Text>List </Text>
        
        <Button
            title="Go to home screen"
            onPress={() => navigate('Form')}
        />


    </View>)
}
   
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatListItem: {
        color: 'grey',
        backgroundColor:'purple',
        padding: 5,
        fontSize: 10,  
        width:1000,
    }
});

export default List