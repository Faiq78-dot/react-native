import { Image, FlatList, TextInput, ScrollView, TouchableOpacity, StyleSheet, Text,  View } from 'react-native';
import {Feather} from '@expo/vector-icons';

               
  const Chatdata=[
    {id : '1' , Name : 'Faiq' , message: 'kya haal ha' },
    {id : '2' , Name : 'Aleem' , message: 'ok'},
    {id : '3' , Name : 'Bilal' , message : 'Chal Yaar kal miltay hn'},
    {id : '4' , Name : 'Asad' , message : 'done'},
    {id : '5' , Name : 'Anns' , message : 'Chal miltay hn'},
    {id : '5' , Name : 'Haaris' , message : 'Cable dedi'},
   
]

const App =()=>{
    return(
        <View>
        <View style={style.Textinput}>
        <Text style={style.Text}>WhatsApp</Text>
        <View style={style.Headericons}>
        <Feather 
        name='camera' size={24} />
        <Feather 
        name='search' size={24} style={style.Iconmargin} />   
        <Feather
        name='more-vertical' size={24} />
        </View>
        </View>
        <View style={style.Searchicon}>
            <Feather
            name='search' size={24}/>
        <TextInput
        style={style.Searchinput}
        placeholder='Ask Meta AI or Search' ></TextInput>
        </View>
        <View> 
            <ScrollView>
        <FlatList
        data={Chatdata}
        renderItem={({item})=><View 
        style={style.Chats} ><Text style={style.Name} >{item.Name}</Text>
        <Text>{item.message}</Text></View>}
        />
        </ScrollView>
        </View>
        <View style={style.Bottombuttons}>
            <Text style={{fontWeight:'bold'}}>Chats</Text>
            <Text style={{fontWeight:'bold'}}>Updates</Text>
            <Text style={{fontWeight:'bold'}}>Communities</Text>
            <Text style={{fontWeight:'bold'}}>Status</Text>
        </View>
        </View>
    )
};

const style=StyleSheet.create({
    
    Textinput :{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:8,
    },
    Text:{
        fontSize: 25,
        color: 'green',
        fontWeight:'bold'
    },
    Headericons:{
        flexDirection:'row'
    },
    Iconmargin:{
        marginHorizontal:15
    },
    Searchicon:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        paddingHorizontal:10,
        borderWidth:1,
        borderRadius: 10
    },
    Searchinput:{
        flex:1,
        paddingHorizontal:10,
        
    },
    Chats:{
        padding:4,        
        margin:2,
    },
    Name:{
        fontWeight:'bold'
    },
    Bottombuttons:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding: 5,
        borderTopWidth:1
    },
})


export default App;