import { Image, FlatList, TextInput, ScrollView, TouchableOpacity, StyleSheet, Text,  View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const Chat =()=>{
    return(
        <View>
            <Text>
                raja
            </Text>
        </View>
    )
}
const MyTab = createMaterialTopTabNavigator()

const Inbox=()=>{
    return(
        <NavigationIndependentTree>
        <NavigationContainer>
            <MyTab.Navigator>
                <MyTab.Screen name='All' component={All}/>
                <MyTab.Screen name='Starred' component={Starred}/>
            </MyTab.Navigator>
        </NavigationContainer>
        </NavigationIndependentTree>
    );
};
const All =()=>{
    return(
        <View>
            <Text>Rajpoot</Text>
        </View>
    )
}
const Starred=()=>{
    return(
        <View>
            
        </View>
    )
}

export default Inbox;