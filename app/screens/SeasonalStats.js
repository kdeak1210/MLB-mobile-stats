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
    dispatch: PropTypes.func,
    team: PropTypes.object
  };

  state = {
    teamId: '1d678440-b4b1-4954-9b39-70afb3ebbcfa',
    year: 2015
  };

  componentDidMount() {
    this.props.dispatch(fetchTeamStats(this.state.teamId, this.state.year));
  }

  toggleHitting = () => {
    this.setState(prevState => ({ showHitting: !prevState.showHitting }));
  };

  render() {
    // const { abbr, name, season: { year } } = statistics;
    const stats = this.props.team.stats[this.state.teamId]
      ? this.props.team.stats[this.state.teamId][this.state.year]
      : {};

    return (
      <Container>
        <StatusBar barStyle="default" translucent={false} />
        {/* <TeamBrand abbr={abbr} name={name} year={year} /> */}
        <TeamBrand abbr="TOR" name="Blue Jays" year={2015} />
        <View style={{ flex: 1 }}>
          <StatsTable stats={stats} />
        </View>
      </Container>
    );
  }
}

export default connect(state => ({
  team: state.team
}))(SeasonalStats);
