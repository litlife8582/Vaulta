import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//Javascript
import { useState, useEffect } from "react";

//Styles
import { globalStyle } from "@/styles/global";
import { GestureHandlerRootView } from "react-native-gesture-handler";



export default function Wealth() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View>
          <Text>The wealth page is under construction</Text>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
