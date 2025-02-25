//                               Main Email Screen          

// import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, TextInput } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Feather } from '@expo/vector-icons';
// import { useState } from 'react';

// export default function
//     Email() {
//     const navigation = useNavigation()
//     const [email, setEmail] = useState('')
//     const [pressable, setPressable] = useState(false)

//     const isvalidEmail = (email) => {
//         setEmail(email)
//         const checkemail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

//         if (checkemail.test(email)) {
//             setPressable(true)

//         } else { setPressable(false) }

//     }

//     const handleTextClick = () => {
//         navigation.navigate('Account')
//     };

//     return (
//         <View style={{ flex: 1, backgroundColor: 'white' }}>

//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>

//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                     <Feather
//                         name='arrow-left' size={24} style={{ marginTop: 55, marginLeft: 40 }} />
//                 </TouchableOpacity>

//                 <Text style={{ marginTop: 50, marginLeft: 100 }}> Sign In</Text>

//             </View>
//             <Text style={{ fontSize: 24, marginTop: 50, fontWeight: 'bold', marginLeft: 20 }}> What's Your Email ?</Text>

//             <View style={style.placeholder}>
//                 <TextInput
//                     placeholder='Enter Your Email' value={email} onChangeText={isvalidEmail} />
//             </View>

//             <Text style={{ marginTop: 20, marginLeft: 25 }}> You'll need to confirm this email later</Text>

//             <View style={{ flex: 1, justifyContent: 'flex-end' }}>

//                 <TouchableOpacity onPress={pressable ? handleTextClick : null}
//                     disabled={!pressable}>
//                     <Text style={[style.text, { backgroundColor: pressable ? "black" : "gray" }]}>Next</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const style = StyleSheet.create({
//     placeholder: {
//         borderRadius: 10,
//         padding: 8,
//         marginHorizontal: 30,
//         backgroundColor: '#F5F5F5',
//         elevation: 20,
//         marginTop: 30
//     },
//     text: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         borderRadius: 10,
//         padding: 20,
//         marginHorizontal: 10,
//         marginTop: 30,
//         textAlign: 'center',
//         marginBottom: 10,
//         color: 'white'
//     }
// })



//                                      practice                    




    // const handleInputChange = (setter) => (value) =>{
    //     setter(value);
    //     if(errorMessage){
    //         setErrorMessage(null)
    //     }
    // }

    // const handleSignup =()=>{

    //     createUserWithEmailAndPassword(auth,email,password)
    //     .then((userCredential) =>{
    //         const user = userCredential.user;
    //        // alert('User registered Successfully!')
    //        sendEmailVerification(user)
    //        .then(()=>{
    //         alert('Verification email sent! Please check your inbox')
    //        })
    //        .catch((error)=>{
    //         setErrorMessage('Email error')
    //        })
    //         setEmail('')
    //         setPassword('')
    //     })
    //     .catch((error) =>{
    //         const errorMsg = error.message;
    //         setErrorMessage(errorMsg)
    //     })
    // } 


  //                               BottomSheet
//   import React, { useCallback, useRef, useMemo, useEffect } from "react";
// import { StyleSheet, View, Text,BackHandler, TouchableOpacity } from "react-native";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import { Feather } from '@expo/vector-icons';

// const App = () => {
//   // hooks
//   const sheetRef = useRef<BottomSheet>(null);

//   // variables
//   const snapPoints = useMemo(() => ["25%", "50%", "90%" , "200%"], []);

//   // callbacks
//   const handleSheetChange = useCallback((index) => {
//     console.log("handleSheetChange", index);
//   }, []);
//   const handleSnapPress = useCallback((index) => {
//     sheetRef.current?.snapToIndex(index);
//   }, []);
//   const handleClosePress = useCallback(() => {
//     sheetRef.current?.close();
//   }, []);

//   useEffect(()=>{
//     const backAction =()=>{
//       if
//       (sheetRef.current?.close){
//         sheetRef.current.close();
//         return true;
//       }
//       return false;
//     }
//     const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)
//     return()=>
//       backHandler.remove();
//   },[])

//   return (
//     <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>

//       <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50, justifyContent: 'space-between' }}>
//         <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>AI Bots</Text>
//         <TouchableOpacity onPress={() => handleSnapPress(3)}>
//           <Feather
//             name='user' size={24} style={{ marginRight: 20 }} />
//         </TouchableOpacity>
//       </View>

//       <GestureHandlerRootView style={styles.container}>
//         <BottomSheet
//           ref={sheetRef}
//           snapPoints={snapPoints}
//           enableDynamicSizing={false}
//           onChange={handleSheetChange}
//           index={-1}
//           enablePanDownToClose={true}
//         >
//           <BottomSheetView style={styles.contentContainer}>
//             <Text>Awesome 🔥</Text>
//           </BottomSheetView>
//         </BottomSheet>
//       </GestureHandlerRootView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 200,
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 36,
//     alignItems: 'center',
//   },
// });

// export default App;



//                               BottomSheet

// import React, { useEffect } from 'react';
// import { useColorScheme, BackHandler } from 'react-native';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import Animated, { useSharedValue, useAnimatedStyle, useDerivedValue, withDelay, withTiming } from 'react-native-reanimated';
// import { Feather } from '@expo/vector-icons';
// import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

// function BottomSheet({ isOpen, toggleSheet, duration = 500, children }) {
//   const { colorScheme } = useColorScheme();
//   const height = useSharedValue(0);
//   const translateY = useSharedValue(1000);
//   const backdropOpacity = useSharedValue(0);

//   const toggleSheetVisibility = () => {
//     if (isOpen.value) {
//       translateY.value = withTiming(0, { duration });
//       backdropOpacity.value = withTiming(0.5, { duration });
//     } else {
//       translateY.value = withTiming(height.value, { duration });
//       backdropOpacity.value = withTiming(0, { duration });
//     }
//     isOpen.value = !isOpen.value;
//   };

//   useEffect(() => {
//     const backAction = () => {
//       if (isOpen.value) {
//         toggleSheetVisibility();
//         return true;
//       }
//       return false;
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
//     return () => backHandler.remove();
//   }, [isOpen]);

//   useEffect(() => {
//     translateY.value = height.value;
//   }, [height]);

//   const sheetStyle = useAnimatedStyle(() => ({
//     transform: [{ translateY: translateY.value }],
//   }));

//   const backdropStyle = useAnimatedStyle(() => ({
//     opacity: backdropOpacity.value,
//   }));

//   const gesture = Gesture.Pan()
//     .onUpdate((event) => {
//       translateY.value = Math.max(0, event.translationY);
//     })
//     .onEnd(() => {
//       if (translateY.value > height.value / 2) {
//         translateY.value = withTiming(height.value, { duration });
//         backdropOpacity.value = withTiming(0, { duration });
//         isOpen.value = false;
//       } else {
//         translateY.value = withTiming(0, { duration });
//         backdropOpacity.value = withTiming(0.5, { duration });
//       }
//     });

//   return (
//     <>
//       <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
//         <TouchableOpacity style={styles.flex} onPress={toggleSheetVisibility} />
//       </Animated.View>
//       <GestureDetector gesture={gesture}>
//         <Animated.View
//           onLayout={(e) => {
//             height.value = e.nativeEvent.layout.height;
//             translateY.value = height.value;
//           }}
//           style={[sheetStyles.sheet, sheetStyle]}>
//           {children}
//         </Animated.View>
//       </GestureDetector>
//     </>
//   );
// }

// const sheetStyles = StyleSheet.create({
//   sheet: {
//     height: '80%',
//     width: '100%',
//     position: 'absolute',
//     bottom: 0,
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//     zIndex: 2,
//     backgroundColor: 'white',
//   },
//   backdrop: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
// });

// export default function App() {
//   const { colorScheme } = useColorScheme();
//   const isOpen = useSharedValue(false);

//   const toggleSheet = () => {
//     isOpen.value = !isOpen.value;
//   };

//   const contentStyle = {
//     color: colorScheme === 'light' ? '#001a72' : '#f8f9ff',
//     textDecorationColor: colorScheme === 'light' ? '#001a72' : '#f8f9ff',
//   };

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between' }}>
//           <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20 }}>AI Bots</Text>
//           <TouchableOpacity onPress={toggleSheet}>
//             <Feather name='user' size={24} style={{ marginTop: 13, marginRight: 15 }} />
//           </TouchableOpacity>
//         </View>
//         <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
//           <Text></Text>
//         </BottomSheet>
//       </View>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   flex: {
//     flex: 1,
//   },
// });


//                                     BottomSheet with runonjs

// import React, { useState, useEffect } from 'react';
// import { BackHandler, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
// import { Feather } from '@expo/vector-icons';
// import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

// function BottomSheet({ isOpen, setIsOpen, duration = 600, children }) {
//   const height = useSharedValue(0);
//   const translateY = useSharedValue(1000);
//   const backdropOpacity = useSharedValue(0);

//   useEffect(() => {
//     if (isOpen) {
//       translateY.value = withTiming(0, { duration });
//       backdropOpacity.value = withTiming(0.5, { duration });
//     } else {
//       translateY.value = withTiming(height.value, { duration });
//       backdropOpacity.value = withTiming(0, { duration });
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     const backAction = () => {
//       if (isOpen) {
//         setIsOpen(false);
//         return true;
//       }
//       return false;
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
//     return () => backHandler.remove();
//   }, [isOpen]);

//   useEffect(() => {
//     translateY.value = height.value;
//   }, [height]);

//   const sheetStyle = useAnimatedStyle(() => ({
//     transform: [{ translateY: translateY.value }],
//   }));

//   const backdropStyle = useAnimatedStyle(() => ({
//     opacity: backdropOpacity.value,
//   }));

//   const gesture = Gesture.Pan()
//     .onUpdate((event) => {
//       translateY.value = Math.max(0, event.translationY);
//     })
//     .onEnd(() => {
//       if (translateY.value > height.value / 2) {
//         translateY.value = withTiming(height.value, { duration }, () => {
//           runOnJS(setIsOpen)(false); // <-- Fix: state update animation ke baad ho
//         });
//         backdropOpacity.value = withTiming(0, { duration });
//       } else {
//         translateY.value = withTiming(0, { duration });
//         backdropOpacity.value = withTiming(0.5, { duration });
//       }
//     });

//   return (
//     <>
//       {isOpen && (
//         <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
//           <TouchableOpacity style={styles.flex} onPress={() => setIsOpen(false)} />
//         </Animated.View>
//       )}
//       <GestureDetector gesture={gesture}>
//         <Animated.View
//           onLayout={(e) => {
//             height.value = e.nativeEvent.layout.height;
//             translateY.value = height.value;
//           }}
//           style={[sheetStyles.sheet, sheetStyle]}>
//           {children}
//         </Animated.View>
//       </GestureDetector>
//     </>
//   );
// }

// const sheetStyles = StyleSheet.create({
//   sheet: {
//     height: '95%',
//     width: '100%',
//     position: 'absolute',
//     bottom: 0,
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//     zIndex: 2,
//     backgroundColor: 'white',
//   },
//   backdrop: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
// });

// export default function App() {
//   const [isSheetOpen, setIsSheetOpen] = useState(false);

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between' }}>
//           <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20 }}>AI Bots</Text>
//           <TouchableOpacity onPress={() => setIsSheetOpen(true)}>
//             <Feather name='user' size={24} style={{ marginTop: 13, marginRight: 15 }} />
//           </TouchableOpacity>
//         </View>
//         <BottomSheet isOpen={isSheetOpen} setIsOpen={setIsSheetOpen}>
//           <Text style={{ padding: 20, fontSize: 16 }}>This is the Bottom Sheet</Text>
//         </BottomSheet>
//       </View>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   flex: {
//     flex: 1,
//   },
// });



//                                 loggedinscreen
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { signOut } from 'firebase/auth';
// import { auth } from '@/firebase.config';

// export default function LoggedInScreen() {
//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome! You are logged in.</Text>
//       <Button title="Log out" onPress={logout} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
// });