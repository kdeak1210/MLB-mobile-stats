import React, { Component } from 'react';
import { StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { ContainerFluid } from '../components/Container';
import { TeamRow, Separator } from '../components/List';
import standings from '../../mocks/standings-2013.json';
import { arrayFromStandings } from '../utils/teams';

class StandingsList extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  state = {
    teams: []
  };

  componentDidMount() {
    // Simulate a API request/response, and set the retrieved teams array as state
    setTimeout(() => {
      const teams = arrayFromStandings(standings);
      this.setState({ teams });
    }, 500);
  }

  handlePressTeam = ({ id, name, abbr }) => {
    // TODO: GET YEAR FROM NAVIGATION PROPS
    this.props.navigation.navigate('SeasonalStats', {
      teamId: id,
      name,
      abbr,
      year: 2015
    });
  };

  render() {
    return (
      <ContainerFluid>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          renderItem={({ item }) => (
            <TeamRow onPress={this.handlePressTeam} {...item} />
          )}
          data={this.state.teams}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
        />
      </ContainerFluid>
    );
  }
}

export default StandingsList;
