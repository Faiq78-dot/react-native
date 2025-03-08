import React,{ useState , useEffect } from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';
import SignIn from './SignIn';
import MyTab from '.';
import LoginScreen from './LoginScreen'
import SignUp from './SignUp'
import AIBOTS from './AI BOTS'
import Google from './Google'

const Stack = createNativeStackNavigator();

export default function 
App(){

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async() =>{
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken){
            setLoggedIn(true);
        }
    };
    return(
                <Stack.Navigator screenOptions={{headerShown : false}}>
                    {loggedIn ? (
                        <Stack.Screen name='AIBOTS' component={AIBOTS} />
                    ) : (
                        <>
                        <Stack.Screen name='Login' component={LoginScreen} />
                        <Stack.Screen name='SignIn' component={SignIn} />
                        <Stack.Screen name='SignUp' component={SignUp} />
                        <Stack.Screen name='Googlr' component={Google} />
                        </>
                    )}
                    <Stack.Screen name='NOVA' component={Home} />
                </Stack.Navigator>      
    )
};

<NavigationIndependentTree>
    <NavigationContainer>
        <MyTab />
    </NavigationContainer>
</NavigationIndependentTree>
