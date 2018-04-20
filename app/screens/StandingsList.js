import React, { Component } from 'react';
import { StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ContainerFluid } from '../components/Container';
import { TeamRow, Separator } from '../components/List';
import { fetchStandings } from '../actions/standings';
// import standings from '../../mocks/standings-2013.json';

class StandingsList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    fetchStandings: PropTypes.func,
    standings: PropTypes.object
  };

  // state = {
  //   teams: []
  // };

  componentDidMount() {
    // Simulate a API request/response, and set the retrieved teams array as state
    // setTimeout(() => {
    //   const teams = arrayFromStandings(standings);
    //   this.setState({ teams });
    // }, 500);
    const { selectedYear } = this.props.navigation.state.params;
    this.props.fetchStandings(selectedYear);
  }

  handlePressTeam = ({ id, name, abbr }) => {
    const { selectedYear } = this.props.navigation.state.params;
    this.props.navigation.navigate('SeasonalStats', {
      teamId: id,
      name,
      abbr,
      year: selectedYear
    });
  };

  render() {
    const { selectedYear } = this.props.navigation.state.params;
    const teams = this.props.standings[selectedYear] || [];
    return (
      <ContainerFluid>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          renderItem={({ item }) => (
            <TeamRow onPress={this.handlePressTeam} {...item} />
          )}
          data={teams}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
        />
      </ContainerFluid>
    );
  }
}

const stateToProps = state => ({
  standings: state.standings.standingsMap
});

export default connect(stateToProps, { fetchStandings })(StandingsList);
