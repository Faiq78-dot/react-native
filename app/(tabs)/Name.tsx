import React from 'react';
import { View, Text, Button, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase.config';
import { useNavigation } from '@react-navigation/native'; 

export const Name = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Successfully logged out');
      navigation.navigate('Chats'); 
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  const UserContent = () => (
    <View style={styles.userContent}>
      <Button title="LOGOUT" onPress={handleLogout} color="#6c757d" />
      <Text style={styles.welcomeText}>Welcome {user.displayName}</Text>
      <Text>{user.email}</Text>
      {user.photoURL && (
        <Image
          source={{ uri: user.photoURL }}
          style={styles.photo}
          resizeMode="contain"
        />
      )}
    </View>
  );

  const LoginButton = () => (
    <Button
      title="LOGIN"
      onPress={() => navigation.navigate('Chats')}
      color="#007bff"
    />
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return <View style={styles.container}>{user ? <UserContent /> : <LoginButton />}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  userContent: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});