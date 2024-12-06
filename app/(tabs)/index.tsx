import { Image, FlatList, TextInput, ScrollView, TouchableOpacity, StyleSheet, Text,  View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Chats from '../Chats';
import AIBOTS from './AI BOTS';
import Inbox from './Inbox';

const Tab = createBottomTabNavigator();

const App =()=>{
    return(
        <NavigationIndependentTree>
        <NavigationContainer>
            <Tab.Navigator   screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarStyle:{
                position:'absolute', left:20, right:20, elevation:0, backgroundColor:'#ffffff',
                borderRadius:15, height:80
            }}}
             >
                <Tab.Screen name='AI BOTS' component={AIBOTS} options={{tabBarIcon:({focused})=>(
                     <View>
                        <Image
                        source={require('../../assets/images/AI Bots.png')} 
                        resizeMode='center'
                        style={{width:45,
                            height:40,
                            marginTop:40
                        
                        }} />
                        <Text style={{fontSize:10, marginLeft:5}}>AI Bots</Text>
                        </View>)}}/>
                <Tab.Screen name='Chats' component={Chats}  options={{tabBarIcon:({focused})=>(
                     <View>
                        <Image
                        source={require('../../assets/images/images.png')} 
                        resizeMode='center'
                        style={{width:45,
                            height:40,
                            marginTop:40
                        
                        }} />
                        <Text style={{fontSize:10, marginLeft:8}}>Chats</Text>
                        </View>)}}/> 
                <Tab.Screen name='Inbox' component={Inbox}  options={{tabBarIcon:({focused})=>(
                     <View>
                        <Image
                        source={require('../../assets/images/Inbox.png')} 
                        resizeMode='center'
                        style={{width:45,
                            height:40,
                            marginTop:40
                        
                        }} />
                        <Text style={{fontSize:10, marginLeft:8}}>Inbox</Text>
                        </View>)}}/>
            </Tab.Navigator>
        </NavigationContainer>
        </NavigationIndependentTree>
    );
};


export default App;