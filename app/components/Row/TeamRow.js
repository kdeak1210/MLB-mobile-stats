import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import Images from '../../assets/images';
import styles from './styles';

const TeamRow = ({ name, abbr }) => (
  <View style={styles.teamRow}>
    <Image style={styles.teamLogo} source={Images[abbr]} />
    <Text>{name}</Text>
  </View>
);

TeamRow.propTypes = {
  name: PropTypes.string,
  abbr: PropTypes.string
};

export default TeamRow;
