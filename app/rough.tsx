

//                              bottomsheet

// const snapPoints = useMemo(() => ['25%' , '50%' , '70%'], []);
// const bottomSheetModalRef = useRef<BottomSheetModal>(null);

// const handlePresentModal =()=>{
//     bottomSheetModalRef.current?.present();
// }

{/* <TouchableOpacity onPress={handlePresentModal}>
<Feather
name='user' size={24} style={{marginRight:20}}/>
</TouchableOpacity>
</View>

<BottomSheetModal
ref={bottomSheetModalRef}
index={0}
snapPoints={snapPoints}>
<View>
<Text>This is great</Text>
</View>
</BottomSheetModal>


</View>
</BottomSheetModalProvider>
</GestureHandlerRootView>
);
} */}

//                           MainBottomSheet


// import { ScrollView, TouchableOpacity, StyleSheet, Text,  View, Modal} from 'react-native';
// import {Feather} from '@expo/vector-icons';
// import {BottomSheetModal , BottomSheetModalProvider} from '@gorhom/bottom-sheet';
// import { GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
// import { useMemo } from 'react'; 
// import { useRef } from 'react';
// import BottomSheet from '@gorhom/bottom-sheet';


// const AIBOTS =()=>{
//     const snapPoints = useMemo(() =>['25%' , '50%' , '70%'] , [])

//     return(
//         <GestureHandlerRootView>
        
//         <View style={{flex:1, backgroundColor:'#fff'}}>
            
//             <View style={{flexDirection:'row', alignItems:'center', marginTop:50, justifyContent:'space-between'}}>
//             <Text style={{fontSize:24, fontWeight:'bold', marginLeft:10}}>AI Bots</Text>
//             <TouchableOpacity >
//                 <Feather
//                 name='user' size={24} style={{marginRight:20}}/>
//             </TouchableOpacity>
//         </View>
    
//         <BottomSheet snapPoints={snapPoints}>
//             <View> 
//                 <Text>This is Great </Text>
//                 </View>
//         </BottomSheet>
        
        
//             </View>
            
//             </GestureHandlerRootView>
//     );
// }

// export default AIBOTS;





//                         BottomSheet Part 2


// import React, { useRef, useMemo } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
// import {Feather} from '@expo/vector-icons';

// const AI_BOTS = () => {
  
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

//   const openBottomSheet = () => {
//     bottomSheetRef.current?.expand(); // This will open the BottomSheet
//   };

//   return (

//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           marginTop: 50,
//           justifyContent: 'space-between',
//         }}
//       >
//         <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>
//           AI Bots
//         </Text>
//         <TouchableOpacity onPress={openBottomSheet}>
//         <Feather
//         name='user' size={24} style={{marginRight:20}} />
//         </TouchableOpacity>
//       </View>

//       <GestureHandlerRootView style = {{flex:2}}>
//       <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>This is the Bottom Sheet!</Text>
//         </View>
//       </BottomSheet>
//       </GestureHandlerRootView>
//     </View>
  
//   );
// };

// export default AI_BOTS;




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


//                                        snappoints
// const App =()=>{0.


//     const Sheet = useRef<BottomSheet>(null)
  
//     const snapPoints = useMemo(()=>['25%' , '50%' , '75%' , '100%'] , [])
  
//     const sheetchange = useCallback(() =>{
  
//     } , [])
  
//     const  Sheetup = useCallback((index)=>{
//       Sheet.current?.snapToIndex(index) 
//     } , [])
  
//     const Closesheet = ((index) =>{
//       Sheet.current?.close(index)
//     } , [])
  
//     return(
//         <View style={{flex:1, backgroundColor:'grey'}}>
//       <GestureHandlerRootView style={{flex:1 }}>
//         <Button title="Open" onPress={()=>{Sheetup(3)}} />
  
//         <BottomSheet
//         ref={Sheet}
//         enableDynamicSizing={false}
//         snapPoints={snapPoints}
//         onChange={sheetchange}
//         >
//         <BottomSheetView style={{flex:1 , alignItems:'center', padding:37, backgroundColor:'#fff'}}>
//           <Text> Hello World </Text>
//         </BottomSheetView>
//           </BottomSheet>
//       </GestureHandlerRootView>
//           </View>  
//     )
//   }
  

//                                 BottomSheet

// import React, { useCallback, useRef, useMemo } from "react";
// import { StyleSheet, View, Text, Button, TouchableOpacity, Alert } from "react-native";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

// const App =()=>{

//     const Sheet = useRef<BottomSheet>(null)
  
//     const snapPoints = useMemo(()=>['25%' , '50%' , '75%' , '100%'] , [])
  
//     const sheetchange = useCallback(() =>{
  
//     } , [])
  
//     const  Sheetup = useCallback((index)=>{
//       Sheet.current?.snapToIndex(index) 
//     } , [])
  
//     const CloseSheet = useCallback(() => {
//       Sheet.current?.close();
//     }, []);
  
//     return(
//         <View style={{flex:1, backgroundColor:'grey'}}>
//       <GestureHandlerRootView style={{flex:1 }}>
//         <View style={{marginTop:50}}>
//         <Button  title="Close" onPress={() => CloseSheet()}  />
//           </View>
//         <Button title="Open" onPress={()=>{Sheetup(3)}} />

//         <BottomSheet
//         ref={Sheet}
//         enableDynamicSizing={false}
//         snapPoints={snapPoints}
//         onChange={sheetchange}
//         >
//         <BottomSheetView style={{flex:1 , alignItems:'center', padding:37, backgroundColor:'#fff'}}>
//           <Text> Hello World </Text>
//         </BottomSheetView>
//           </BottomSheet>
//       </GestureHandlerRootView>
//           </View>  
//     )
//   }
  

// export default App;



//                        Bottomsheet 2
// import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Modal,Button } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// import { GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
// import { useMemo, useRef, useCallback } from 'react';
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";


// const AIBOTS = () => {

//       const Sheet = useRef<BottomSheet>(null)
  
//     const snapPoints = useMemo(()=>['25%' , '50%' , '75%' , '100%'] , [])
  
//     const sheetchange = useCallback(() =>{
  
//     } , [])
  
//     const  Sheetup = useCallback((index)=>{
//       Sheet.current?.snapToIndex(index) 
//     } , [])
  
//     const CloseSheet = useCallback(() => {
//       Sheet.current?.close();
//     }, []);

//   return (
    
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50, justifyContent: 'space-between' }}>
//         <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>AI Bots</Text>
//         <TouchableOpacity onPress={()=>{Sheetup(3)}}>
//           <Feather
//           name='user' size={24} style={{ marginRight: 20 }} />
//           </TouchableOpacity>
//         </View>
//         <View>
//           <GestureHandlerRootView >
//         <Button title='open' onPress={()=>{Sheetup(3)}} />
//       <BottomSheet
//         ref={Sheet}
//         enableDynamicSizing={false}
//         snapPoints={snapPoints}
//         onChange={sheetchange}
//         index={-1}
//         >
//         <BottomSheetView style={{flex:1 , alignItems:'center', padding:37, backgroundColor:'#fff'}}>
//           <Text> Hello World </Text>
//         </BottomSheetView>
//         </BottomSheet>
//     </GestureHandlerRootView>
//       </View>
//     </View>
//   );
// }

// export default AIBOTS;