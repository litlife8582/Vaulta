import React from "react";
import { investmentCard } from "@/styles/global";
import { View,Text,TouchableOpacity } from "react-native";


export default function InvestmentCard({investmentAmount,growthPercentage}:{investmentAmount:number,growthPercentage:number}){
    return(
        
        <View style={investmentCard.container}>
            <Text style={investmentCard.txt1}>Total Investment Value</Text>
            <View style={{flexDirection:"row"}}>
                <Text style={investmentCard.investmentAmount}>₹{investmentAmount}</Text>
                <Text style={investmentCard.growthPercentage}>{growthPercentage}% this month</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={investmentCard.btncontainer}>
                    <Text style={investmentCard.buttons}>Invest</Text>
                    <Text style={investmentCard.buttons}>Withdraw</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}