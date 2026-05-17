import React from "react";
import { titlebar } from "@/styles/global";
import { View,Text } from "react-native";

export default function Titlebar(){
    return(
        <View style={titlebar.title}>
            <Text style={titlebar.text}>Vaulta</Text>
        </View>
    )
};