import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { signInWithCredential, GoogleAuthProvider } from 'firebase/auth';

// 🔥 Firebase Config (Apne Firebase Console se Copy Karo)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};


const GoogleSignIn = () => {
  const [user, setUser] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
    iosClientId: "YOUR_IOS_CLIENT_ID",
    webClientId: "406456909713-87nr6sd9nekgqom7i5n4c0dpjuklr20h.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);

      signInWithCredential(auth, credential)
        .then((userCredential) => {
          setUser(userCredential.user);
        })
        .catch((error) => {
          console.error("Login Failed", error);
        });
    }
  }, [response]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <Button title="Sign in with Google" onPress={() => promptAsync()} />
      {user && <Text>Welcome, {user.displayName}!</Text>}
    </View>
  );
};

export default GoogleSignIn;