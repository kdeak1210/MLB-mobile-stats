import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import Images from '../../assets/images';
import styles from './styles';

const TeamIcon = ({ abbr }) => (
  <View style={styles.teamIconContainer}>
    <Image style={styles.teamIcon} source={Images[abbr]} />
  </View>
);

TeamIcon.propTypes = {
  abbr: PropTypes.string.isRequired
};

export default TeamIcon;
