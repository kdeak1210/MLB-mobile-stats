import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { TeamBrand } from '../components/Brand';
import { StatsTable } from '../components/StatsTable';
import { fetchTeamStats } from '../actions/teams';

class SeasonalStats extends Component {
  static propTypes = {
    fetchTeamStats: PropTypes.func,
    navigation: PropTypes.object,
    team: PropTypes.object
  };

  componentDidMount() {
    const { teamId, year } = this.props.navigation.state.params;
    this.props.fetchTeamStats(teamId, year);
  }

  render() {
    const { teamId, name, abbr, year } = this.props.navigation.state.params;
    const stats = this.props.team.stats[teamId]
      ? this.props.team.stats[teamId][year]
      : {};

    return (
      <Container>
        <StatusBar barStyle="default" translucent={false} />
        <TeamBrand abbr={abbr} name={name} year={year} />
        <View style={{ flex: 1 }}>
          <StatsTable stats={stats} />
        </View>
      </Container>
    );
  }
}

const stateToProps = state => ({
  team: state.team
});

export default connect(stateToProps, { fetchTeamStats })(SeasonalStats);
