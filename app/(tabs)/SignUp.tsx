import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase.config';
import { useNavigation } from '@react-navigation/native'

export default function SignupScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const createAccount = async () => {
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate('AI BOTS'); // Navigate after account creation
      } else {
        setError("Passwords don't match");
      }
    } catch (e) {
      setError('There was a problem creating your account');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" style={styles.input} />
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirm Password" secureTextEntry style={styles.input} />
      <Button title="Create Account" onPress={createAccount} />
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.link}>Already have an account? Login</Text>
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