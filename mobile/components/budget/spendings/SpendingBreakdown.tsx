import React from "react";
import { useState } from "react";
import { View,TextInput,Button } from "react-native";
import { spendingBreakdown } from "@/styles/global";
import Transactions from "./Transactions";
import { FlatList } from "react-native";

export default function SpendingBreakdown(){
    const [transactionsList,setTransactionsList]=useState<{id:string,title:string,amount:number}[]>([]);
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");

    const handleTransaction=()=>{
        if(title && amount){
            const newTransaction={
                id:Date.now().toString(),
                title:title,
                amount:parseFloat(amount)
            };
            setTransactionsList([newTransaction,...transactionsList]);
            setTitle("");
            setAmount("");
        }
    };

    return(
        <View style={spendingBreakdown.container}>
            <View style={spendingBreakdown.input}>
                <TextInput 
                    placeholder="Title..."
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput 
                    placeholder="Amount..."
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                />
                <Button title="Add" onPress={handleTransaction}/>
            </View>
            <FlatList
                data={transactionsList}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <Transactions data={item}/>
                )}
            />
        </View>
    )
}