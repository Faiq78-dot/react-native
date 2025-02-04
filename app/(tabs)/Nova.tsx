import { Image, FlatList, TextInput, ScrollView, TouchableOpacity, StyleSheet, Text,  View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Home from './Home';
import SignIn from './SignIn';
import MyTab from '.';
import Email from './Email';
import Account from './Account';
import { Name } from './Name';

const Stack = createNativeStackNavigator();

export default function 
HomeStack(){
    return(
                <Stack.Navigator>
                    <Stack.Screen name='NOVA' component={Home} />
                    <Stack.Screen name='Log In' component={SignIn} />
                    <Stack.Screen name='Sign In' component={Email} options={({navigation}) =>
                        ({title : 'Sign In' , headerLeft : () =>(
                            <TouchableOpacity onPress={() =>navigation.goBack()}>
                                <Feather
                                name='arrow-left' size={24} />
                            </TouchableOpacity> 
                        )})} />
                    <Stack.Screen name='Create Account' component={Account} />
                    <Stack.Screen name='Your Name' component={Name} />
                </Stack.Navigator>      
    )
};

<NavigationIndependentTree>
    <NavigationContainer>
        <MyTab />
    </NavigationContainer>
</NavigationIndependentTree>
