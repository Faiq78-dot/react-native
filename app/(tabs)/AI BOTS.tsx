import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const App =()=>{

  const Sheet = useRef<BottomSheet>(null)

  const snapPoints = useMemo(()=>['25%' , '50%' , '75%' , '100%'] , [])

  const sheetchange = useCallback(() =>{

  } , [])

  const  Sheetup = useCallback((index)=>{
    Sheet.current?.snapToIndex(index) 
  } , [])

  const Closesheet = ((index) =>{
    Sheet.current?.close(index)
  } , [])

  return(
      <View style={{flex:1, backgroundColor:'grey'}}>
    <GestureHandlerRootView style={{flex:1 }}>
      <Button title="Open" onPress={()=>{Sheetup(3)}} />

      <BottomSheet
      ref={Sheet}
      enableDynamicSizing={false}
      snapPoints={snapPoints}
      onChange={sheetchange}
      >
      <BottomSheetView style={{flex:1 , alignItems:'center', padding:37, backgroundColor:'#fff'}}>
        <Text> Hello World </Text>
      </BottomSheetView>
        </BottomSheet>
    </GestureHandlerRootView>
        </View>  
  )
}

export default App;