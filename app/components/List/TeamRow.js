import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import TeamIcon from './TeamIcon';
import TeamRecord from './TeamRecord';
import styles from './styles';

const TeamRow = ({ onPress, name, id, abbr, win, loss, win_p }) => (
  <TouchableHighlight onPress={() => onPress({ id, name, abbr })}>
    <View style={styles.teamRow}>
      <TeamIcon abbr={abbr} />
      <Text style={styles.teamName}>{name}</Text>
      <TeamRecord win={win} loss={loss} ratio={win_p} />
    </View>
  </TouchableHighlight>
);

TeamRow.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  abbr: PropTypes.string,
  win: PropTypes.number,
  loss: PropTypes.number,
  win_p: PropTypes.number
};

export default TeamRow;
