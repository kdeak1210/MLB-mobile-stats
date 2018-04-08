import React, { Component } from 'react';
import { View, Text } from 'react-native';
// StatusBar, FlatList

// Importing this local JSON simulates the data retrieved from Sportradar API
import standings from '../../mocks/standings-2013.json';
import { arrayFromStandings } from '../utils/teams';

class StandingsList extends Component {
  componentDidMount() {
    console.log(arrayFromStandings(standings));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Test Standings List Screen</Text>
      </View>
    );
  }
}

export default StandingsList;
