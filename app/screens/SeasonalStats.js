import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { TeamBrand } from '../components/Brand';
import { StatsToggle, ButtonRow } from '../components/Button';
import { HittingTable } from '../components/StatsTable';
// import { extractHittingStats } from '../utils/stats';
// import statistics from '../../mocks/blue-jays-2015.json';
import { fetchTeamStats } from '../actions/teams';

class SeasonalStats extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    team: PropTypes.object
  };

  state = {
    showHitting: false,
    teamId: '1d678440-b4b1-4954-9b39-70afb3ebbcfa',
    year: 2015
  };

  componentDidMount() {
    // Simulate a API request/response, and set the retrieved teams array as state
    // setTimeout(() => {
    //   const hittingStats = extractHittingStats(statistics);
    //   this.setState({ hittingStats });
    // }, 500);
    this.props.dispatch(fetchTeamStats(this.state.teamId, this.state.year));
  }

  toggleHitting = () => {
    this.setState(prevState => ({ showHitting: !prevState.showHitting }));
  };

  render() {
    // const { abbr, name, season: { year } } = statistics;
    const stats = this.props.team[this.state.teamId]
      ? this.props.team[this.state.teamId][this.state.year]
      : [];

    return (
      <Container>
        <StatusBar barStyle="default" translucent={false} />
        {/* <TeamBrand abbr={abbr} name={name} year={year} /> */}
        <TeamBrand abbr="TOR" name="Blue Jays" year={2015} />
        <ButtonRow>
          <StatsToggle name="hitting" onPress={this.toggleHitting} />
          <StatsToggle name="hitting" onPress={this.toggleHitting} />
          <StatsToggle name="hitting" onPress={this.toggleHitting} />
        </ButtonRow>
        <View style={{ flex: 1 }}>
          {this.state.showHitting && <HittingTable stats={stats} />}
        </View>
      </Container>
    );
  }
}

export default connect(state => ({
  team: state.team
}))(SeasonalStats);
