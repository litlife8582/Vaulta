import React from "react";
import { useState,useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, Modal } from "react-native";
import { COLORS, transactionHistory } from "@/styles/global";
import Transactions from "./Transactions";
import { FlatList } from "react-native";

export default function TransactionHistory() {
  const [transactionsList, setTransactionsList] = useState<
    { id: string; Title: string; Amount: number }[]
  >([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [monthlySpending, setMonthlySpending]=useState(0);

  useEffect(()=>{
    loadTransaction(); 
  },[]);

  const loadTransaction=async()=>{
    try{
      const response=await fetch('http://192.168.0.173:3000/api/transactions');

      if(!response.ok) throw new Error("Failed to fetch");

      const transactions=await response.json();

      setTransactionsList(transactions);

      const total = transactions.reduce((sum: number, t: any) => sum + (parseFloat(t.amount) || 0), 0);
      setMonthlySpending(total);
    }catch(error){
      console.error(error);
    }
  };

  const handleTransaction = async() => {
    if(!title || !amount){
      alert("Please enter tranactions name and amount");
      return;
    }

    const currentDate=new Date();

    try{
      const response=await fetch('http://192.168.0.173:3000/api/transactions',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        Title:title,
        Amount:parseFloat(amount),
        "Credit/Debit":type,
        Date: currentDate.toLocaleDateString(),
        Time: currentDate.toLocaleTimeString()
      })
    })

    if(!response.ok) throw new Error("Failed to save");

    const newTransaction = {
        id: Date.now().toString(),
        Title: title,
        Amount: parseFloat(amount),
      };

      setTransactionsList([newTransaction, ...transactionsList]);
      setTitle("");
      setAmount("");
      setType("");
      setMonthlySpending(monthlySpending+parseFloat(amount));
      setIsModalVisible(false);

    alert("Transaction logged successfully!");
  }catch(error){
    console.log(error);
  }

};

  return (
    <View style={transactionHistory.container}>
      <View style={transactionHistory.headerRow}>
        <Text style={transactionHistory.title}>Transaction History</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={transactionHistory.modalAddButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={transactionHistory.monthlySpending}>
        <Text style={transactionHistory.monthlySpendingtxt}>{new Date().toLocaleString('default', { month: 'long' })} : </Text>
        <Text style={transactionHistory.monthlySpendingtxt}>{monthlySpending}</Text>
      </View>


      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />


      <View>
        {transactionsList.map((item)=>(
          <Transactions key={item.id} data={item}/>
        ))}
      </View>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={transactionHistory.modalOverlay}>
          <Text style={transactionHistory.modalTitle}>New Transaction</Text>
          <TextInput
            placeholder="Title..."
            value={title}
            onChangeText={setTitle}
            style={transactionHistory.input}
          />
          <TextInput
            placeholder="Amount..."
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            style={transactionHistory.input}
          />
          <View style={transactionHistory.modalButtons}>
            <TouchableOpacity
              style={transactionHistory.modalButtons}
              onPress={handleTransaction}
            >
              <Text style={transactionHistory.modalButtonTexts}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={transactionHistory.modalButtons}
            >
              <Text style={transactionHistory.modalButtonTexts}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
