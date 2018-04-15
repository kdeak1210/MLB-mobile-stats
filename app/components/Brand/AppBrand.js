import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const AppBrand = () => (
  <View style={styles.appContainer}>
    <View style={styles.appLogoContainer}>
      <Image
        style={styles.appLogo}
        source={require('../../assets/img/baseball-logo-transparent.png')}
        resizeMode="contain"
      />
    </View>
    <Text style={styles.titleText}>MLB Mobile Stats</Text>
    <Text style={styles.subText}>
      Select a season to view standings and team statistics for the year
    </Text>
  </View>
);

export default AppBrand;
