import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Item({ item, deleteItem }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      <Icon
        name='remove'
        size={30}
        color={'#752a54'}
        onPress={() => deleteItem(item.id)}
      ></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    borderBottomColor: '#bab7af',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
  },
});

Item.propTypes = {
  text: PropTypes.string,
  item: PropTypes.obj,
  id: PropTypes.string,
  deleteItem: PropTypes.func,
};
