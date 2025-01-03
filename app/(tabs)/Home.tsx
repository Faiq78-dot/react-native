import { impactAsync } from 'expo-haptics';
import { ScrollView, TouchableOpacity, StyleSheet, Text,  View , Image , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import {Feather} from '@expo/vector-icons';


const Home =()=>{
    return(
        <View style={{flex:1, alignItems:'center', backgroundColor:'#fff'}}>
            <Image 
            source={require('../../assets/images/Nova 2.png')} 
            resizeMode='center' style={{width:50, height:45, marginTop:200}} />
            <Text style={{fontSize:24, marginTop:18, fontWeight:'500'}}>NOVA</Text>
            <Text style={{marginTop:10}}> Hi, I'm Nova! Powered by ChatGPT.</Text>
            <Text>I'm here to assist you with guidance</Text>
            <Text>on crafting an impressive CV, writing ..</Text>
                <Text style={{fontWeight:'700'}}>more</Text>
            <Text style={{fontWeight:'300', marginTop:18}}>Powered by Nova</Text>
            <TouchableOpacity>
            <Text style={{marginTop:18}}> Examples</Text>    
            </TouchableOpacity>

            <View style={{flex:1, justifyContent:'flex-end'}}>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                <Feather
                name='plus' size={24} style={{backgroundColor:'lightgrey', marginTop:10,}} />
                </TouchableOpacity>
                <TextInput 
                placeholder='Message' style={{borderRadius:40 ,paddingHorizontal:115,
                    backgroundColor:'lightgrey', marginHorizontal:10, paddingVertical:10,}}/>
                    <TouchableOpacity>
                        <Feather
                        name='mic' size={21} style={{marginTop:10}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
} 

export default Home;