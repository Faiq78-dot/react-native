import React, { useCallback, useRef, useMemo, useEffect } from "react";
import { StyleSheet, View, Text,BackHandler, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Feather } from '@expo/vector-icons';

const App = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%" , "200%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  useEffect(()=>{
    const backAction =()=>{
      if
      (sheetRef.current?.close){
        sheetRef.current.close();
        return true;
      }
      return false;
    }
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)
    return()=>
      backHandler.remove();
  },[])

  return (
    <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>AI Bots</Text>
        <TouchableOpacity onPress={() => handleSnapPress(3)}>
          <Feather
            name='user' size={24} style={{ marginRight: 20 }} />
        </TouchableOpacity>
      </View>

      <GestureHandlerRootView style={styles.container}>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enableDynamicSizing={false}
          onChange={handleSheetChange}
          index={-1}
          enablePanDownToClose={true}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🔥</Text>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});

export default App;