import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import { Container } from '../components/Container';
import { TeamBrand } from '../components/Brand';
import { StatsToggle, ButtonRow } from '../components/Button';
import { HittingTable } from '../components/StatsTable';
import { extractHittingStats } from '../utils/stats';
import statistics from '../../mocks/blue-jays-2015.json';

class SeasonalStats extends Component {
  state = {
    showHitting: false,
    hittingStats: []
  };

  componentDidMount() {
    // Simulate a API request/response, and set the retrieved teams array as state
    setTimeout(() => {
      const hittingStats = extractHittingStats(statistics);
      this.setState({ hittingStats });
    }, 500);
  }

  toggleHitting = () => {
    this.setState(prevState => ({ showHitting: !prevState.showHitting }));
  };

  render() {
    const { abbr, name, season: { year } } = statistics;
    return (
      <Container>
        <StatusBar barStyle="default" translucent={false} />
        <TeamBrand abbr={abbr} name={name} year={year} />
        <ButtonRow>
          <StatsToggle name="hitting" onPress={this.toggleHitting} />
          <StatsToggle name="hitting" onPress={this.toggleHitting} />
          <StatsToggle name="hitting" onPress={this.toggleHitting} />
        </ButtonRow>
        <View style={{ flex: 1 }}>
          {this.state.showHitting && (
            <HittingTable stats={this.state.hittingStats} />
          )}
        </View>
      </Container>
    );
  }
}

export default SeasonalStats;
