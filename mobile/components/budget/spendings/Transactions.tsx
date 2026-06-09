import React from "react";
import { View,Text } from "react-native";
import { transactions } from "@/styles/global";

export default function Transactions({data}:{data:{id:string, Title:string, Amount:number}}){
    
    return(
        <View style={transactions.container}>
            <View>
                <Text style={transactions.title}>{data.Title}</Text>
            </View>
            <Text>₹{data.Amount.toFixed(2)}</Text>
        </View>
    )
}