import { impactAsync } from 'expo-haptics';
import { ScrollView, TouchableOpacity,StyleSheet,Text,View,TextInput, Keyboard, Animated , KeyboardAvoidingView} from 'react-native';
import { useState,useEffect, useRef } from 'react';
import {Feather} from '@expo/vector-icons';



const Home =()=>{
const [KeyboardVisible,setKeyboardVisible] = useState(false);
const examplePosition = useRef(new Animated.Value(0)).current;
useEffect(()=>{
    const KeyboardDidShowListener = Keyboard.addListener("keyboardDidShow",
         ()=> {setKeyboardVisible(true);
    Animated.timing(examplePosition,{
        toValue: -10,
        duration:300,
        useNativeDriver:false,
    }).start();
    });
    const KeyboardDidHideListener = Keyboard.addListener("keyboardDidHide",()=> {setKeyboardVisible(false);
    Animated.timing(examplePosition,{
        toValue: 0,
        duration:300,
        useNativeDriver:false,
    }).start();
    });

    return () => {
        KeyboardDidShowListener.remove();
        KeyboardDidHideListener.remove();
    };
}, []);
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
        {!KeyboardVisible &&( <View style={{ alignItems:'center', marginTop:150}}>            
            <Text style={{fontSize:24, fontWeight:'500'}}>OpenAI GPT-4o Mini</Text>
            <Text style={{marginTop:20}}> Hi, I'm OpenAI GPT-4o Mini, an AI tool for</Text>
            <Text>writing, summarizing, translating, and</Text>
            <Text>generating ideas. I simplify tasks like</Text>
            <Text>crafting content and providing accurate</Text>
            <Text>awnsers.</Text>
            <Text style={{fontWeight:'300'}}>less</Text>
            <Text style={{fontWeight:'300', marginTop:18}}>Developed on OpenAI</Text>
                </View>)}

            {/* <Animated.View style={[style.header,{marginBottom:examplePosition}]}>
            <TouchableOpacity>
            <Text style={{marginTop:18, textAlign:'center'}}> Examples</Text>    
            </TouchableOpacity>
            </Animated.View> */}
        
        <View style={{flex:1, justifyContent:'flex-end'}}>
            
                <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#EEEEEE',
                    padding:5, borderRadius:30, marginHorizontal:10}}>
                        
                <TouchableOpacity> 
                <Feather
                name='plus' size={24} style={{backgroundColor:'#EEEEEE'}} />
                </TouchableOpacity>                    
                <TextInput 
                placeholder='Message' style={{flex:1, fontSize:16, paddingHorizontal:5, color:"black"}} />
                <TouchableOpacity>
                        <Feather
                        name='mic' size={21}  />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const style=StyleSheet.create({
    header:{
        alignItems:'center',
        marginBottom:20
    }
})

export default Home;