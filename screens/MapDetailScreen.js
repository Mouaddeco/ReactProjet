import React from 'react'
  import { Text, StyleSheet, View,  Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import MapView,
{  Marker}
  from 'react-native-maps';
  
 const height=700;
  class MapDetailScreen extends React.Component{
 
    
    constructor(){
      super();
      this.state={
          nom:'',
          type:'',
          latitude:'',
          longitude:'',
          
      }
  }
  
  

   

    render(){
      
   /*MapDetailScreen.navigationOptions={
      nom:_nom
    }*/
    //const { navigation } = this.props;
    const { navigate } = this.props.navigation;
   
   //const _nom= navigation.getParam('nom');
    //const _type = navigation.getParam('type');
      const { navigation } = this.props;
      let float=parseFloat(navigation.getParam("latitude"));
      let float1=parseFloat(navigation.getParam("longitude"));
    return (
     
    
      <>
      <View>
      <Text style={{fontSize:60, color:'grey'}}> Détails</Text>
      <Text style={{fontSize:24, color:'brown'}}>Le nom du Point:   <Text style={{ fontSize: 20, color:'black' }}>{navigation.getParam('nom')}</Text></Text> 
      <Text style={{fontSize:24, color:'brown'}}>Le type du point :<Text style={{ fontSize: 20, color:'black' }}>{navigation.getParam('type')}</Text></Text>
      <Text style={{fontSize:24, color:'brown'}}>La latitude du point :<Text style={{ fontSize: 20, color:'black' }}>{float}</Text></Text>
      <Text style={{fontSize:24, color:'brown'}}>La longitude du point :<Text style={{ fontSize: 20, color:'black' }}>{float1}</Text></Text>
      </View>
      <View>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
          latitude: 31.79,
          longitude: -7.08,
          latitudeDelta: 70,
          longitudeDelta: 1
        }}
      >
        
        
        <Marker 
        coordinate={{latitude:float ,longitude:float1 }}
        title={navigation.getParam('nom')}></Marker>
      </MapView>
      </View>

        
      </>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    height
  }
})
  export default MapDetailScreen