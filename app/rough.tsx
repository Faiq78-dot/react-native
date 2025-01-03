

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




//                 MainBottomSheet

// const App = () => {
//     // hooks
//     const sheetRef = useRef<BottomSheet>(null);
  
//     // variables
//     const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);
  
//     // callbacks
//     const handleSheetChange = useCallback((index) => {
//       console.log("handleSheetChange", index);
//     }, []);
//     const handleSnapPress = useCallback((index) => {
//       sheetRef.current?.snapToIndex(index);
//     }, []);
//     const handleClosePress = useCallback(() => {
//       sheetRef.current?.close();
//     }, []);
  
//     // render
//     return (
//       <GestureHandlerRootView style={styles.container}>
//         <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
//         <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
//         <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
//         <Button title="Close" onPress={() => handleClosePress()} />
//         <BottomSheet
//           ref={sheetRef}
//           snapPoints={snapPoints}
//           enableDynamicSizing={false}
//           onChange={handleSheetChange}
//         >
//           <BottomSheetView style={styles.contentContainer}>
//             <Text>Awesome 🔥</Text>
//           </BottomSheetView>
//         </BottomSheet>
//       </GestureHandlerRootView>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingTop: 200,
//     },
//     contentContainer: {
//       flex: 1,
//       padding: 36,
//       alignItems: 'center',
//     },
//   });
  