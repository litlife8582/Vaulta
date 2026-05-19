import React from "react";
import { View } from "react-native";
import { transactions } from "@/styles/global";

export default function Transactions({data}:{data:{id:string, title:string, amount:number}}){
    
    return(
        <View style={transactions.container}>
            
        </View>
    )
}