import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//Javascript
import { useState,useEffect } from "react";

//Styles
import { globalStyle } from "@/styles/global";

//Component
import BalanceCard from "@/components/BalanceCard";
import Titlebar from "@/components/Titlebar";

export default function Index() {
  const [balance,setBalance]=useState(0);
  const [growthPercentage,setGrowthPercentage]=useState(0);

  const [loaded, error] = useFonts({
    'Montserrat': require('../assets/font/Montserrat/static/Montserrat-ExtraBold.ttf'),
    'Poppins': require('../assets/font/Poppins/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView  style={{flex:1}}>
      <Titlebar/>
      <View  style={{flex:1,marginTop:40}}>
        <BalanceCard
         balance={balance}
         growthPercentage={growthPercentage}/>
      </View>
    </SafeAreaView>
    
  );
}
