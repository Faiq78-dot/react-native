import { Image, FlatList, TouchableOpacity, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function
    Email() {
        
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/NovaIcon.png')}
                    resizeMode='center'
                    style={{ height: 150, width: 500, marginTop: 102 }}
                />
            </View>

            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>Welcome to Nova</Text>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={style.Button}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={style.Google} onPress={()=> navigation.navigate('Google')} >
                    <Image
                        source={require('../../assets/images/google logo.png')}
                        resizeMode='center'
                        style={{ height: 20, width: 20 }}
                    />
                    <Text style={{ marginLeft: 60, fontWeight: '500' }}>Continue with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Button: {
        fontSize: 20,
        marginTop: 50,
        textAlign: 'center',
        padding: 18,
        backgroundColor: '#007BFF',
        borderRadius: 20,
        marginHorizontal: 20,
        color: 'white'
    },
    Google: {
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center',
        padding: 18,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
    }
})
