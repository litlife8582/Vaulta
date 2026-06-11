import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";

//Javascript
import { useState, useEffect } from "react";

//Styles
import { globalStyle } from "@/styles/global";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//Components
import InvestmentCard from "@/components/wealth/InvestmentCard";

export default function Wealth() {
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [growthPercentage, setGrowthPercentage] = useState(0);

  const [loaded, error] = useFonts({
      Montserrat_extraBold: require("../../assets/font/Montserrat/static/Montserrat-ExtraBold.ttf"),
      Montserrat_bold: require("../../assets/font/Montserrat/static/Montserrat-Bold.ttf"),
      Montserrat_boldItalic:require("../../assets/font/Montserrat/static/Montserrat-BoldItalic.ttf"),
      Montserrat_extraLight:require("../../assets/font/Montserrat/static/Montserrat-ExtraLight.ttf"),
      Poppins: require("../../assets/font/Poppins/Poppins-Regular.ttf"),
    });
  

  return (
   <GestureHandlerRootView style={{flex:1}}>
       <SafeAreaView style={{ flex: 1 }}>
         <ScrollView showsVerticalScrollIndicator={false}> 
           <View style={{ flex: 1}}>
             <InvestmentCard investmentAmount={investmentAmount} growthPercentage={growthPercentage} />
           </View>
         </ScrollView>
       </SafeAreaView>
       </GestureHandlerRootView>
  );
}
