import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const InputWithButton = props => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.buttonContainer}
      onPress={props.onPress}
      underlayColor="#948d9b"
    >
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableHighlight>
    <View style={styles.border} />
    <TextInput style={styles.input} {...props} />
  </View>
);

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string
};

export default InputWithButton;
