import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ContainerFluid = ({ children }) => (
  <View style={styles.containerFluid}>{children}</View>
);

ContainerFluid.propTypes = {
  children: PropTypes.any
};

export default ContainerFluid;
