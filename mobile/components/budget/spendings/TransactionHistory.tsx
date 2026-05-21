import React from "react";
import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Modal } from "react-native";
import { COLORS, transactionHistory } from "@/styles/global";
import Transactions from "./Transactions";
import { FlatList } from "react-native";

export default function TransactionHistory() {
  const [transactionsList, setTransactionsList] = useState<
    { id: string; title: string; amount: number }[]
  >([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [monthlySpending, setMonthlySpending]=useState(0);

  const handleTransaction = () => {
    if (title && amount) {
      const newTransaction = {
        id: Date.now().toString(),
        title: title,
        amount: parseFloat(amount),
      };

      setIsModalVisible(false);

      setTransactionsList([newTransaction, ...transactionsList]);
      setTitle("");
      setAmount("");
      setMonthlySpending(monthlySpending+parseFloat(amount));
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


      <FlatList
        data={transactionsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Transactions data={item} />}
      />

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
