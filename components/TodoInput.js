import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { PropTypes } from 'prop-types';

export default function TodoInput(props) {
  const [text, setText] = useState('');

  const onTextChange = (text) => {
    setText(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text) => onTextChange(text)}
        onSubmitEditing={() => {
          props.addItem(text);
          setText('');
        }}
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.addItem(text);
          setText('');
        }}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#598507',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

TodoInput.propTypes = {
  addItem: PropTypes.func,
};
