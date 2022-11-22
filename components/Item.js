import { StyleSheet, Text, View } from 'react-native';

export default function Item (props) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
        
    },
    title: {

    },
});
