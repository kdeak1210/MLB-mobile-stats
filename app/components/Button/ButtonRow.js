import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ButtonRow = ({ children }) => (
  <View style={styles.buttonRow}>{children}</View>
);

ButtonRow.propTypes = {
  children: PropTypes.any
};

export default ButtonRow;
