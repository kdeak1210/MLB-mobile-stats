import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
// StatusBar, FlatList

import { TeamRow, Separator } from '../components/List';
import standings from '../../mocks/standings-2013.json';
import { arrayFromStandings } from '../utils/teams';

class StandingsList extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    // Simulate a API request/response, and set the retrieved teams array as state
    setTimeout(() => {
      const teams = arrayFromStandings(standings);
      this.setState({ teams });
    }, 1000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Test Standings List Screen</Text>
        <FlatList
          renderItem={({ item }) => <TeamRow {...item} />}
          data={this.state.teams}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default StandingsList;
