import React from "react";
import { balanceCard } from "@/styles/global";
import { View,Text } from "react-native";


export default function BalanceCard({balance,growthPercentage}:{balance:number,growthPercentage:number}){
    return(
        <View style={balanceCard.container}>
            <Text style={balanceCard.txt1}>Total Balance</Text>
            <Text style={balanceCard.balance}>₹{balance}</Text>
            <Text style={balanceCard.growthPercentage}>{growthPercentage}% this month</Text>
        </View>
    )
}