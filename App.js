import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import TodoInput from './components/TodoInput';
import React from 'react';
import Item from './components/Item';

export default function App() {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Placeholder todo item' },
    { id: uuid.v4(), text: 'This is another todo item!' },
  ]);

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', `Can't input empty item!`, [{ text: 'OK' }]);
    } else {
      setItems((prevItem) => {
        return [{ id: uuid.v4(), text }, ...prevItem];
      });
    }
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <TodoInput addItem={addItem}></TodoInput>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Item item={item} deleteItem={deleteItem}></Item>
        )}
      ></FlatList>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
