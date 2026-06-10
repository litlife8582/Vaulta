import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout(){

    return(
    <Tabs screenOptions={{tabBarActiveTintColor:'#0A2540', headerShown:false}}>
        <Tabs.Screen
            name="index"
            options={{
                title:"Home",
                tabBarIcon:({color})=><Ionicons name="home" size={24} color={color}/>
            }}
        />
        
        <Tabs.Screen
            name="plan"
            options={{
                title:"Plan",
                tabBarIcon:({color})=><Ionicons name="pie-chart" size={24} color={color}/>
            }}
        />
        <Tabs.Screen
            name="acounts"
            options={{
                title:"Accounts",
                tabBarIcon:({color})=><Ionicons name="wallet" size={24} color={color}/>
            }}
        />
    </Tabs>
    )
}