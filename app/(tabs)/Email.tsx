import { TouchableOpacity, StyleSheet, Text, View, Image, TextInput, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { auth } from '@/firebase.config';
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function
    Email() {
    const navigation = useNavigation()
    const [user] = useAuthState(auth);
    const [userEmail, setUserEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [pressable, setPressable] = useState(false) 
    const [errorMessage, setErrorMessage] = useState('')
    const [infoMessage, setInfoMessage] = useState('');

    useEffect(() => {
        const authenticateUser = async () => {
            if (user) {
                navigation.navigate('Chats');
                return
            }
            if (isSignInWithEmailLink(auth, window.location.href)) {
                let emailFromStorage = await AsyncStorage.getItem('email');
                if (!emailFromStorage) {
                    emailFromStorage = prompt('Please provide your email');
                }
                setIsLoading(true);

                try {
                    await signInWithEmailLink(auth, emailFromStorage, window.location.href);
                    await AsyncStorage.removeItem('email');
                    navigation.navigate('Chats');
                } catch (error) {
                    setErrorMessage(error.message);
                    navigation.navigate('Email')
                } finally {
                    setIsLoading(false);
                }
            }
        };

        authenticateUser();
    }, [user, navigation]);

    const handleLogin = async () => {
        if (!userEmail) {
            Alert.alert('Error', 'Please enter a Valid email');
            return;
        };
        setIsLoading(true);
        try {
            await sendSignInLinkToEmail(auth, userEmail, {
                url: "myapp://Name",
                handleCodeInApp: true,
            });
            await AsyncStorage.setItem('email', userEmail);
            setInfoMessage('We have sent you an email with a link to sign in');
            navigation.navigate('Account');
        } catch (eror) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        };
    };

    const isvalidEmail = (email) => {
                setUserEmail(email)
                const checkemail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        
                if (checkemail.test(email)) {
                    setPressable(true)
        
                } else { setPressable(false) }
        
            }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>



            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather
                        name='arrow-left' size={24} style={{ marginTop: 55, marginLeft: 40 }} />
                </TouchableOpacity>

                <Text style={{ marginTop: 50, marginLeft: 100 }}> Sign In</Text>

            </View>
            <Text style={{ fontSize: 24, marginTop: 50, fontWeight: 'bold', marginLeft: 20 }}> What's Your Email ?</Text>

            {
                isLoading ? (
                    <ActivityIndicator size="large" color="blue" />
                ) : (
                    <>
                        {user ? (
                            <Text> PLease Wait </Text>
                        ) : (
                            <View style={style.placeholder}>
                                <TextInput
                                    placeholder='Enter Your Email' value={userEmail}
                                    onChangeText={isvalidEmail}
                                    keyboardType='email-address' />
                            </View>
                        )
                        }
                        <Text style={{ marginTop: 20, marginLeft: 25 }}> You'll need to confirm this email later</Text>
                    </>
                )
            }



            <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                <TouchableOpacity onPress={handleLogin}
                    disabled={!pressable}>
                    {errorMessage ? <Text style={style.error}>{errorMessage}</Text> : null}
                    {infoMessage ? <Text style={style.info}>{infoMessage}</Text> : null}
                    <Text style={[style.text, { backgroundColor: pressable ? "black" : "gray" }]}>Next</Text>
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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginTop: 30,
        textAlign: 'center',
        marginBottom: 10,
        color: 'white',
    },
    error: {
        color: 'red',
        marginTop: 10
    },
    info: {
        color: 'green',
        marginTop: 10
    }
})

