import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const TeamRecord = ({ win, loss, ratio }) => (
  <View style={styles.recordContainer}>
    <Text style={styles.wins}>{win}</Text>
    <Text style={styles.hyphen}>-</Text>
    <Text style={styles.losses}>{loss}</Text>
    <Text style={styles.ratio}>({ratio.toFixed(3)})</Text>
  </View>
);

TeamRecord.propTypes = {
  win: PropTypes.number.isRequired,
  loss: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired
};

export default TeamRecord;
