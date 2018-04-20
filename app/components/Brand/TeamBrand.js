import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import Images from '../../assets/images';
import styles from './styles';

const TeamBrand = ({ abbr, name, year }) => (
  <View style={styles.teamContainer}>
    <Image style={styles.teamLogo} source={Images[abbr]} resizeMode="contain" />
    <Text style={styles.teamDescription}>
      {name} Stats for {year}
    </Text>
  </View>
);

TeamBrand.propTypes = {
  abbr: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string
};

export default TeamBrand;
