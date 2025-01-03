import { ScrollView, TouchableOpacity, StyleSheet, Text,  View , Image , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import {Feather} from '@expo/vector-icons';

const Email =()=>{

return(

    <View style={{flex:1, backgroundColor:'white'}}>

        <Text style={{textAlign:'center', marginTop:60}}> Sign In</Text>
        <Text style={{fontSize:24, marginTop:50, fontWeight:'bold', marginLeft:20}}> What's Your Email ?</Text>

        <View style={style.placeholder}>
            <TextInput
            placeholder='' />
        </View>

        <Text style={{marginTop:20}}> You'll need to confirm this email later</Text>

        <View style={{flex:1, justifyContent:'flex-end'}}>
            <TouchableOpacity>
                <Text style={style.Button}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
);
};

const style = StyleSheet.create ({
    placeholder :{
        borderRadius:10,
        padding:8,
        marginHorizontal:30,
        backgroundColor:'#F5F5F5',
        elevation:20,
        marginTop:30
    },
    Button:{
        borderRadius:10,
        padding:20,
        marginHorizontal:10,
        backgroundColor:'#6E6E6E',
        elevation:20,
        marginTop:30,
        textAlign:'center',
        color:'white',
        marginBottom:10
    }
})

export default Email;