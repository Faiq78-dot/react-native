import { Image, FlatList, TextInput, ScrollView, TouchableOpacity, StyleSheet, Text,  View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const MyTab = createMaterialTopTabNavigator()

const Inbox=()=>{
    return(
        <View style={{flex:1, backgroundColor:'#fff' }}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{fontSize:25, fontWeight:'bold', margin:10, marginTop:50}}>Chats</Text>  
            <TouchableOpacity>
                    <Feather
                    name='edit' size={24} style={{marginTop:50, marginRight:30}} />
                </TouchableOpacity>
        
        
            </View>
            
        <NavigationIndependentTree>
        <NavigationContainer>
            <MyTab.Navigator screenOptions={{tabBarStyle:{ }}}>
                <MyTab.Screen name='All' component={All}/>
                <MyTab.Screen name='Starred' component={Starred}/>
            </MyTab.Navigator>
        </NavigationContainer>
        </NavigationIndependentTree>
        </View>
    );
};
const All =()=>{
    return(
        <View style={{flex:1, backgroundColor:'#ffff'}}>
            <Text style={{fontSize:24}}>Rajpoot</Text>
        </View>
    )
}
const Starred=()=>{
    return(
        <View style={{flex:1, backgroundColor:'#ffff'}}>
            <Text style={{fontSize:24}}>FAIQ</Text>
        </View>
    )
}

export default Inbox;