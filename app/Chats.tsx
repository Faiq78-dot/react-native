import { Text,TextInput, View, StyleSheet, TouchableOpacity, Modal, Button, TouchableHighlight } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function
Chats({ navigation }){
    const [showModal, setshowModal] = useState(false)

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={Style.Icons}>
                <Modal
                    visible={showModal}
                    animationType="slide"
                    onRequestClose={() => setshowModal(false)}>
                    <View>
                        <TouchableOpacity onPress={() => setshowModal(false)}>
                            <Feather
                                name="x-square" size={29} style={{ marginLeft: 320, marginTop: 9 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>Acccess Nova </Text>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>on Desktop </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 30 }}>
                        <Feather
                            name="smartphone" size={30} color='blue' />
                        <Feather
                            name="repeat" size={30} color='blue' style={{ marginHorizontal: 5 }} />
                        <Feather
                            name="monitor" size={30} color='blue' />
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, textAlign: 'center' }}> You can access your Nova account on</Text>
                        <Text style={{ fontSize: 15, textAlign: 'center' }}> Desktop & Web. Your entire chat history </Text>
                        <Text style={{ fontSize: 15, textAlign: 'center' }}> will be synchronized across various </Text>
                        <Text style={{ fontSize: 15, textAlign: 'center' }}> devices </Text>
                    </View>

                    <Text style={{ textAlign: 'center', marginTop: 50, fontWeight: '700', fontSize: 15 }}> Sign up for a Nova Account</Text>

                    <View style={{ flexDirection: 'row', marginTop: 14 }}>
                        <Feather
                            name="user" size={25} style={{ marginHorizontal: 8, marginLeft: 62 }} />
                        <Text style={{ textAlign: 'center', fontWeight: '300' }}>Sign up to create account </Text>
                    </View>
                    <Text style={{ fontSize: 15, marginLeft: 92, fontWeight: '300' }}> If You Already have an </Text>
                    <Text style={{ fontSize: 15, marginLeft: 92, fontWeight: '300' }}> account , log in. </Text>

                    <Text style={{ textAlign: 'center', fontWeight: '700', marginTop: 50, fontSize: 15 }}> Visit Nova on Your Desktop</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Feather
                            name="monitor" size={25} style={{ marginLeft: 50, marginTop: 7 }} />
                        <Text style={{ fontSize: 15, marginHorizontal: 13, marginTop: 6, fontWeight: '300' }}>Visit novaapp.ai on your </Text>
                    </View>
                    <Text style={{ marginLeft: 90, fontSize: 15, fontWeight: '300' }}>computer to continue your</Text>
                    <Text style={{ marginLeft: 90, fontSize: 15, fontWeight: '300' }}>conservation there.</Text>

                    <View>
                        
                        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                            <Text style={Style.Button}>Get Started</Text>
                        </TouchableOpacity>

                    </View>

                </Modal>

                <TouchableOpacity onPress={() => setshowModal(true)}>
                    <Feather
                        name="monitor" size={20} />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Feather
                        name="user" size={20} style={{ marginHorizontal: 15 }} />
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 25 }}>NOVA</Text>

            <View style={{ borderRadius:40 ,padding:20, marginHorizontal:60,
                backgroundColor:'white', elevation:20, flexDirection:'row', marginTop:23}}>
                    <TouchableHighlight onPress={() =>navigation.navigate('Nova')}>
                <Text>
                Ask a question...
                </Text>
                </TouchableHighlight>
                <TouchableOpacity>
                    <Feather
                    name="camera" size={24} style={{marginLeft:80}} />
                </TouchableOpacity>
            </View>

        </View>
    );
};
const Style = StyleSheet.create({
    Icons: {
        flexDirection: 'row',
        marginVertical: 60,
        justifyContent: 'flex-end',
        marginHorizontal: 18

    },
    CenteredModal: {
        position: 'absolute',
        bottom: 650,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    Button: {
        backgroundColor: '#007BFF',
        paddingVertical: 20,
        paddingHorizontal: 30,
        textAlign: 'center',
        marginTop: 50,
        color: 'white',
        borderRadius: 10,
        borderWidth: 3
    }
})

