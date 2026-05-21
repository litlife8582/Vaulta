import React from "react";
import { View,Text } from "react-native";
import { transactions } from "@/styles/global";

export default function Transactions({data}:{data:{id:string, title:string, amount:number}}){
    
    return(
        <View style={transactions.container}>
            <View>
                <Text>{data.title}</Text>
            </View>
            <Text>₹{data.amount.toFixed(2)}</Text>
        </View>
    )
}