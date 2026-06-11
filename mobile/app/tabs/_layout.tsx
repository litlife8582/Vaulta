import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import { globalStyle } from "@/styles/global";

import Titlebar from "@/components/Titlebar";

export default function TabLayout() {

  const [loaded, error] = useFonts({
      Montserrat_extraBold: require("../../assets/font/Montserrat/static/Montserrat-ExtraBold.ttf"),
    });
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F7FA' }}>
        <Titlebar/>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#0A2540",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="wealth"
          options={{
            title: "Wealth",
            tabBarIcon: ({ color }) => (
              <Ionicons name="pie-chart" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="portfolio"
          options={{
            title: "Portfolio",
            tabBarIcon: ({ color }) => (
              <Ionicons name="wallet" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
