import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

export default function
    Email() {
    const navigation = useNavigation()
    const [text , setText] =useState('')

    const [isTextClickable , setIsTextClickable] = useState(false)

    const handleInputChange = (value) => {
        setText(value);

        setIsTextClickable(value.trim().length > 0);
    };

    const handleTextClick =() =>{
        navigation.navigate('Account')
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ flexDirection: 'row', alignItems:'center'}}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather
                        name='arrow-left' size={24}  style={{marginTop:55, marginLeft:40}}/>
                </TouchableOpacity>

                <Text style={{ marginTop: 50, marginLeft:100}}> Sign In</Text>

            </View>
            <Text style={{ fontSize: 24, marginTop: 50, fontWeight: 'bold', marginLeft: 20 }}> What's Your Email ?</Text>

            <View style={style.placeholder}>
                <TextInput
                    placeholder='Enter Your Email' value={text} onChangeText={handleInputChange}  />
            </View>

            <Text style={{ marginTop: 20, marginLeft:25}}> You'll need to confirm this email later</Text>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                <TouchableOpacity onPress={isTextClickable ? handleTextClick : null }
                disabled={!isTextClickable }>
                    <Text style={[style.text, {backgroundColor: isTextClickable ? "black" : "gray"} ]}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    placeholder: {
        borderRadius: 10,
        padding: 8,
        marginHorizontal: 30,
        backgroundColor: '#F5F5F5',
        elevation: 20,
        marginTop: 30
    },
    // Button: {
    //     borderRadius: 10,
    //     padding: 20,
    //     marginHorizontal: 10,
    //     elevation: 20,
    //     marginTop: 30,
    //     textAlign: 'center',
    //     color: 'white',
    //     marginBottom: 10,
    // },
    ActiveButton:{
        backgroundColor:'black'
    },
    InActiveButton:{
        backgroundColor:'#d3d3d3'
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginTop: 30,
        textAlign: 'center',
        marginBottom: 10,
        color:'white'
    }
})
