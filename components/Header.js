import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>TODO List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
