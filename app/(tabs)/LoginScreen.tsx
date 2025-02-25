import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase.config';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await AsyncStorage.setItem('userLoggedIn','true')
      navigation.navigate('AI BOTS');
    } catch (e) {
      setError('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" style={styles.input} />
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Login" onPress={loginUser} disabled={!email || !password} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white'},
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, width: 200 },
  error: { color: 'red', marginBottom: 10 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  link: { color: 'blue', marginTop: 10 },
});