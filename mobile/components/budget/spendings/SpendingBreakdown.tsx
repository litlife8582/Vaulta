import React from "react";
import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Modal } from "react-native";
import { COLORS, spendingBreakdown } from "@/styles/global";
import Transactions from "./Transactions";
import { FlatList } from "react-native";

export default function SpendingBreakdown() {
  const [transactionsList, setTransactionsList] = useState<
    { id: string; title: string; amount: number }[]
  >([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    }
  };

  return (
    <View style={spendingBreakdown.container}>
      <View style={spendingBreakdown.headerRow}>
        <Text style={spendingBreakdown.title}>Spending Breakdown</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={spendingBreakdown.modalButtonTexts}>Add</Text>
        </TouchableOpacity>
      </View>

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
        <View style={spendingBreakdown.modalOverlay}>
          <Text style={spendingBreakdown.modalTitle}>New Transaction</Text>
          <TextInput
            placeholder="Title..."
            value={title}
            onChangeText={setTitle}
            style={spendingBreakdown.input}
          />
          <TextInput
            placeholder="Amount..."
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            style={spendingBreakdown.input}
          />
          <View style={spendingBreakdown.modalButtons}>
            <TouchableOpacity 
            style={spendingBreakdown.modalButtons}
            onPress={handleTransaction}>
              <Text style={spendingBreakdown.modalButtonTexts}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => setIsModalVisible(false)} 
            style={spendingBreakdown.modalButtons}>
              <Text style={spendingBreakdown.modalButtonTexts}>Cancel</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
    </View>
  );
}
