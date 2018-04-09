import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import TeamIcon from './TeamIcon';
import TeamRecord from './TeamRecord';
import styles from './styles';

const TeamRow = ({ name, abbr, win, loss, win_p }) => (
  <View style={styles.teamRow}>
    <TeamIcon abbr={abbr} />
    <Text style={styles.teamName}>{name}</Text>
    <TeamRecord win={win} loss={loss} ratio={win_p} />
  </View>
);

TeamRow.propTypes = {
  name: PropTypes.string,
  abbr: PropTypes.string,
  win: PropTypes.number,
  loss: PropTypes.number,
  win_p: PropTypes.number
};

export default TeamRow;
