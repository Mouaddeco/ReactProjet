import React from 'react';
import {View, Button, TextInput,Input,Text } from 'react-native';
import flatListData from '../data/flatListData';


class Form extends React.Component{
 static navigationOptions = {
 title: 'Form',
};
constructor(){
super();
this.state={
 nom:'',type:'',latitude:'',longitude:'',response : [],}
}
render(){
const { navigation } = this.props;
const { navigate } = this.props.navigation;
return( <View style={{margin:20, backgroundColor:'grey', marginTop:50}}>
<TextInput
value={this.state.nom}  
placeholder='Entrer le nom du Point'
backgroundColor='skyblue'
onChangeText={(text)=>{this.setState({nom:text})}}
 style={{borderWidth:2, borderColor:'skyblue', margin:20}}
 >
</TextInput>
<TextInput
value={this.state.type} 
placeholder='Entrer le type du point'
backgroundColor='skyblue'
onChangeText={(text)=>{this.setState({type:text})}}
style={{borderWidth:2, borderColor:'skyblue', margin:20}}
>
</TextInput>
<TextInput
placeholder='Entrer la latitude du point'
backgroundColor='skyblue'
onChangeText={(text)=>{this.setState({latitude:text})}}
keyboardType="numeric"
style={{borderWidth:2, borderColor:'skyblue', margin:20}}
 >
</TextInput>
<TextInput
placeholder='Entrer la longitude du point'
backgroundColor='skyblue'
onChangeText={(text)=>{this.setState({longitude:text})}}
keyboardType="numeric"
style={{borderWidth:2, borderColor:'skyblue', margin:20}}
>
</TextInput>
<Button
style={{ fontSize: 18, color: 'red', backgroundColor:'red' }}
title='Ajouter Un point'
containerStyle={{
padding: 8,
marginLeft: 70,
marginRight: 70,
height: 40,
borderRadius: 6,
backgroundColor: 'red'
}}
onPress={() => {
 if (this.state.nom.length == 0 || this.state.type.length == 0 ) {
alert("Il faut entrer les données suivantes");
return;
}    
const newPoint = {
nom: this.state.nom,
type: this.state.type,
latitude:this.state.latitude,
longitude:this.state.longitude,
};    
flatListData.push(newPoint); 


}}>
</Button>
</View>)
}
}

export default Form