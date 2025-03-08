import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Modal, TouchableHighlight, BackHandler, ScrollView, Image, Alert } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import { auth } from '@/firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet ,{ BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";


function CustomBottomSheet({ isOpen, setIsOpen, duration = 600, children }) {

  const height = useSharedValue(0);
  const translateY = useSharedValue(1000);
  const backdropOpacity = useSharedValue(0);

  useEffect(() => {
    if (isOpen) {
      translateY.value = withTiming(0, { duration });
      backdropOpacity.value = withTiming(0.5, { duration });
    } else {
      translateY.value = withTiming(height.value, { duration });
      backdropOpacity.value = withTiming(0, { duration });
    }
  }, [isOpen]);

  useEffect(() => {
    const backAction = () => {
      if (isOpen) {
        setIsOpen(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [isOpen]);

  useEffect(() => {
    translateY.value = height.value;
  }, [height]);

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }));

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value = Math.max(0, event.translationY);
    })
    .onEnd(() => {
      if (translateY.value > height.value / 6) {
        translateY.value = withTiming(height.value, { duration }, () => {
          runOnJS(setIsOpen)(false); // <-- Fix: state update animation ke baad ho
        });
        backdropOpacity.value = withTiming(0, { duration });
      } else {
        translateY.value = withTiming(0, { duration });
        backdropOpacity.value = withTiming(0.5, { duration });
      }
    });
  return (
    <>
      {isOpen && (
        <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
          <TouchableOpacity style={Style.flex} onPress={() => setIsOpen(false)} />
        </Animated.View>
      )}
      <GestureDetector gesture={gesture}>
        <Animated.View
          onLayout={(e) => {
            height.value = e.nativeEvent.layout.height;
            translateY.value = height.value;
          }}
          style={[sheetStyles.sheet, sheetStyle]}>
          {children}
        </Animated.View>
      </GestureDetector>
    </>
  );
}
const sheetStyles = StyleSheet.create({
  sheet: {
    height: '95%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
    backgroundColor: 'white',
    flex: 1
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default function
  Chats({setLoggedIn}) {
  const [showModal, setshowModal] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "55%"], []);

  // callbacks
  const handleSheetChanges = useCallback(() => {
  }, []);
  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // 	// renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="none"
      />
    ),
    []
  );


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    await AsyncStorage.removeItem('userToken');
    setLoggedIn(false)
    setUser(null)
  };


  const handleMonitorClick =()=>{
    if(user){
      handleSnapPress(1)
    }else{
      setshowModal(true);
    }
  }

  return (

    <GestureHandlerRootView>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>       
        <View style={Style.Icons}>
          <Modal
            visible={showModal}
            animationType="slide"
            onRequestClose={() => setshowModal(false)}>
            <View>
              <TouchableOpacity onPress={() => setshowModal(false)}>
                <Feather
                  name="x-square" size={29} style={{ marginLeft: 320, marginTop: 9 }} />
              </TouchableOpacity>
            </View>
            <View style={{ margin: 20 }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>Acccess Nova </Text>
              <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>on Desktop </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 30 }}>
              <Feather
                name="smartphone" size={30} color='blue' />
              <Feather
                name="repeat" size={30} color='blue' style={{ marginHorizontal: 5 }} />
              <Feather
                name="monitor" size={30} color='blue' />
            </View>
            <View>
              <Text style={{ fontSize: 15, textAlign: 'center' }}> You can access your Nova account on</Text>
              <Text style={{ fontSize: 15, textAlign: 'center' }}> Desktop & Web. Your entire chat history </Text>
              <Text style={{ fontSize: 15, textAlign: 'center' }}> will be synchronized across various </Text>
              <Text style={{ fontSize: 15, textAlign: 'center' }}> devices </Text>
            </View>

            <Text style={{ textAlign: 'center', marginTop: 50, fontWeight: '700', fontSize: 15 }}> Sign up for a Nova Account</Text>

            <View style={{ flexDirection: 'row', marginTop: 14 }}>
              <Feather
                name="user" size={25} style={{ marginHorizontal: 8, marginLeft: 62 }} />
              <Text style={{ textAlign: 'center', fontWeight: '300' }}>Sign up to create account </Text>
            </View>
            <Text style={{ fontSize: 15, marginLeft: 92, fontWeight: '300' }}> If You Already have an </Text>
            <Text style={{ fontSize: 15, marginLeft: 92, fontWeight: '300' }}> account , log in. </Text>

            <Text style={{ textAlign: 'center', fontWeight: '700', marginTop: 50, fontSize: 15 }}> Visit Nova on Your Desktop</Text>

            <View style={{ flexDirection: 'row' }}>
              <Feather
                name="monitor" size={25} style={{ marginLeft: 50, marginTop: 7 }} />
              <Text style={{ fontSize: 15, marginHorizontal: 13, marginTop: 6, fontWeight: '300' }}>Visit novaapp.ai on your </Text>
            </View>
            <Text style={{ marginLeft: 90, fontSize: 15, fontWeight: '300' }}>computer to continue your</Text>
            <Text style={{ marginLeft: 90, fontSize: 15, fontWeight: '300' }}>conservation there.</Text>

            <View>

              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={Style.Button}>Get Started</Text>
              </TouchableOpacity>

            </View>

          </Modal>

          <TouchableOpacity onPress={handleMonitorClick}>
            <Feather
              name="monitor" size={20} />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => setIsSheetOpen(true)}>
            <Feather
              name="user" size={20} style={{ marginHorizontal: 15 }} />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 25 }}>NOVA</Text>

        <View style={{
          borderRadius: 40, padding: 20, marginHorizontal: 60,
          backgroundColor: 'white', elevation: 20, flexDirection: 'row', marginTop: 23
        }}>
          <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <Text>
              Ask a question...
            </Text>
          </TouchableHighlight>
          <TouchableOpacity>
            <Feather
              name="camera" size={24} style={{ marginLeft: 80 }} />
          </TouchableOpacity>
        </View>
        <CustomBottomSheet isOpen={isSheetOpen} setIsOpen={setIsSheetOpen}>

          <ScrollView>

            <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 10 }}> Profile</Text>
            <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 25, fontWeight: '500' }}>NOVA AI</Text>
            <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '500' }}>CHATBOT</Text>
            <TouchableOpacity style={{ marginTop: 15 }}>
              <View style={{ paddingHorizontal: 10, backgroundColor: '#E6FAF1', borderRadius: 20, marginHorizontal: 120 }}>
                <Text style={{ textAlign: 'center', color: 'green' }}>Free</Text>
                <Text style={{ textAlign: 'center', color: 'green' }}>3 credits</Text>
              </View>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <Image
                source={require('../assets/images/Welcome.png')}
                resizeMode='center' style={{ width: 65, height: 65 }} />
            </View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Welcome To Nova</Text>
            {user ? (
              <TouchableOpacity onPress={handleLogout}>
                <Text style={{
                  textAlign: 'center', fontSize: 15,
                  fontWeight: '600', marginTop: 15, padding: 10, borderWidth: 1,
                  marginHorizontal: 135, borderRadius: 20
                }}>Logout</Text>
              </TouchableOpacity>) : (
              <TouchableOpacity onPress={() => setshowModal(true)}>
                <Text style={{
                  textAlign: 'center', fontSize: 15,
                  fontWeight: '600', marginTop: 15, padding: 10, borderWidth: 1,
                  marginHorizontal: 135, borderRadius: 20
                }}>Sign In</Text>
              </TouchableOpacity>)}
            <View style={{
              flexDirection: 'row', marginTop: 25,
              backgroundColor: '#E6FaF2', padding: 10, alignItems: 'center', marginHorizontal: 16
            }}>
              <Feather
                name='monitor' size={28} color='#2AAE66' />
              <Text style={{ fontSize: 15, flexWrap: 'wrap', color: '#2AAE66' }}>     Visit novaapp.ai on a computer
                to {'\n'}           continue your conservations {'\n'}                                  there </Text>
            </View>
            <Text style={{ fontSize: 17, fontWeight: '600', marginTop: 30 }}> Available Platform</Text>
          </ScrollView>
        </CustomBottomSheet>
        
				 <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            enableDynamicSizing={false}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            animationConfigs={{ duration: 300 }}>

            <BottomSheetView style={Style.contentcontainer}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>Nova on Desktop</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>and Web</Text>
                <Feather style={{ marginTop: 20 }}
                  name="monitor" size={40} color="blue"
                />

                <Text style={{ marginTop: 20 }}>Visit novaapp.ai on your computer to continue</Text>
                <Text>your conservation there</Text>

                <Text style={{ marginTop: 20 }}>You can simply use your email address to log in.</Text>
              </View>
              <View style={{ backgroundColor: '#007AFF', padding: 10, marginHorizontal: 20, borderRadius: 10, marginBottom: 20 }}>
                <TouchableOpacity onPress={handleClosePress} >
                  <Text style={{ fontSize: 24, textAlign: 'center', color: 'white' }}> Got it</Text>
                </TouchableOpacity>
              </View>
            </BottomSheetView>
          </BottomSheet>         
      </View>
    </GestureHandlerRootView>
  );
};
const Style = StyleSheet.create({
  Icons: {
    flexDirection: 'row',
    marginVertical: 60,
    justifyContent: 'flex-end',
    marginHorizontal: 18

  },
  CenteredModal: {
    position: 'absolute',
    bottom: 650,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  Button: {
    backgroundColor: '#007BFF',
    paddingVertical: 20,
    paddingHorizontal: 30,
    textAlign: 'center',
    marginTop: 50,
    color: 'white',
    borderRadius: 10,
    borderWidth: 3
  },
  flex: {
    flex: 1
  },
  contentcontainer: {
    flex: 1
  }
})

