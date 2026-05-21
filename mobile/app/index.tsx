import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//Javascript
import { useState, useEffect } from "react";

//Styles
import { globalStyle } from "@/styles/global";

//Component
import Titlebar from "@/components/Titlebar";
import BalanceCard from "@/components/budget/BalanceCard";
import TransactionHistory from "@/components/budget/spendings/TransactionHistory";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

export default function Index() {
  const [balance, setBalance] = useState(0);
  const [growthPercentage, setGrowthPercentage] = useState(0);

  const [loaded, error] = useFonts({
    Montserrat_extraBold: require("../assets/font/Montserrat/static/Montserrat-ExtraBold.ttf"),
    Montserrat_bold: require("../assets/font/Montserrat/static/Montserrat-Bold.ttf"),
    Montserrat_boldItalic:require("../assets/font/Montserrat/static/Montserrat-BoldItalic.ttf"),
    Montserrat_extraLight:require("../assets/font/Montserrat/static/Montserrat-ExtraLight.ttf"),
    Poppins: require("../assets/font/Poppins/Poppins-Regular.ttf"),
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
    <GestureHandlerRootView style={{flex:1}}>
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Titlebar />
        <View style={{ flex: 1, marginTop: 40 }}>
          <BalanceCard balance={balance} growthPercentage={growthPercentage} />
          <TransactionHistory />
        </View>
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}
