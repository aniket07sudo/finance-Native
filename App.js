import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Dimensions,Platform ,Switch} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from '../test/Navigation/BasicNavigation';

const fetchFonts = () => {
  return Font.loadAsync({
    'dm-regular': require('./assets/Fonts/DMSans-Regular.ttf'),
    'dm-bold': require('./assets/Fonts/DMSans-Bold.ttf'),
    'sf-pro': require('./assets/Fonts/SF-Pro.ttf')
  })
}


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  
const ErrorApp = (e) => {
  console.log(e);
}
  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={ErrorApp} />
  }
  return (
    <SafeAreaView style={styles.container}>

        <Navigator />
     
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : null
    
  },
});
