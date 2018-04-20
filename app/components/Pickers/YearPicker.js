import React from 'react';
import { View, Picker } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

// Years allowed with the SprotRadar trial API
const YEARS = ['2013', '2014', '2015', '2016', '2017'];

const YearPicker = ({ selectedYear, onSelectYear }) => (
  <View style={styles.container}>
    <Picker
      selectedValue={selectedYear}
      style={styles.yearPicker}
      onValueChange={itemValue => onSelectYear(itemValue)}
    >
      {YEARS.map(year => <Picker.Item key={year} label={year} value={year} />)}
    </Picker>
  </View>
);

YearPicker.propTypes = {
  selectedYear: PropTypes.string,
  onSelectYear: PropTypes.func
};

export default YearPicker;
