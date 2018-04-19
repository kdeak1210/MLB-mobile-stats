import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

// import styles from './styles';

const YearItem = ({ year, onPress }) => (
  <TouchableHighlight onPress={() => onPress(year)}>
    <View>
      <Text>Season {year}</Text>
    </View>
  </TouchableHighlight>
);

YearItem.propTypes = {
  year: PropTypes.string,
  onPress: PropTypes.func
};

export default YearItem;
