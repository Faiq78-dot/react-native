import { Image, FlatList, TextInput, ScrollView, TouchableOpacity, StyleSheet, Text,  View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import { HeaderTitle } from '@react-navigation/elements';

const Stack = createNativeStackNavigator();

const App =()=>{
    return(
        <NavigationIndependentTree>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
        </NavigationIndependentTree>
    );
};



export default App;