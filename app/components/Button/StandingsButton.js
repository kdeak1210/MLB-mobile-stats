import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const StandingsButton = ({ onPress, selectedYear }) => (
  <TouchableOpacity style={styles.standingsButton} onPress={onPress}>
    <View style={styles.standingsContainer}>
      <Ionicons name="md-stats" size={42} color="#9bc53d" />
      <Text style={styles.standingsText}>View {selectedYear} Standings</Text>
    </View>
  </TouchableOpacity>
);

StandingsButton.propTypes = {
  onPress: PropTypes.func,
  selectedYear: PropTypes.string
};

export default StandingsButton;
