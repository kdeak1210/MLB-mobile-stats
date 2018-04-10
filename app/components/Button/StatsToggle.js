import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const StatsToggle = ({ name, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{name.toUpperCase()}</Text>
  </TouchableOpacity>
);

StatsToggle.propTypes = {
  name: PropTypes.string,
  onPress: PropTypes.func
};

export default StatsToggle;
