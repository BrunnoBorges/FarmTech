import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { AppLoading } from 'expo'

import Routes from './src/router';

export default function App() {
  let [fontsLoad] = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoad){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="black" translucent={true} />
      <Routes/>
    </>  
  );
}
