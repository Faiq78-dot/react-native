import { Image, FlatList, TextInput, ScrollView, TouchableOpacity, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Account =()=>{
    
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/Letter.png')}
                    resizeMode='center'
                    style={{ height: 150, width: 110, marginTop: 102 }}
                />
            </View>

            <Text style={{fontSize:20, textAlign:'center', fontWeight:'bold', marginTop:15}}>Check Your Mail Box</Text>
            <Text style={{textAlign:'center', margin:10, marginTop:20}}>We Sent an email with a link</Text>
            <Text style={{textAlign:'center'}}>that will log you in at</Text>
            <Text style={{textAlign:'center'}}></Text>
            <Text style={style.mailbox}>Go to your mailbox</Text>

        </View>
    );
};

const style= StyleSheet.create({
    mailbox :{
        padding:18 ,
        borderRadius:50,
        backgroundColor:'black',
        color:'white',
        textAlign:'center',
        marginHorizontal:70,
        fontWeight:'600'
    }
})

export default Account;