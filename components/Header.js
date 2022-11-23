import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>TODO List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    marginBottom: 5,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#075985',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
