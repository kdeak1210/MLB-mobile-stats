import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const TableItem = ({ name, value }) => (
  <View style={styles.statContainer}>
    <View style={styles.textContainer}>
      <Text style={styles.statName}>{name}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  </View>
);

TableItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default TableItem;
