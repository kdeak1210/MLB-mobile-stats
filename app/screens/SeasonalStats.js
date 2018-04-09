import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Container } from '../components/Container';
import { TeamBrand } from '../components/Brand';
import { HittingTable } from '../components/StatsTable';
import { extractHittingStats } from '../utils/stats';
import statistics from '../../mocks/blue-jays-2015.json';

const styles = StyleSheet.create({
  teamName: { fontSize: 22, color: '#fff', fontWeight: '800' },
  button: { alignItems: 'center', backgroundColor: '#DDD', padding: 10 }
});

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
    }, 1000);
  }

  toggleHitting = () => {
    this.setState(prevState => ({ showHitting: !prevState.showHitting }));
  };

  render() {
    const { abbr, name, season: { year } } = statistics;
    return (
      <Container>
        <TeamBrand abbr={abbr} name={name} year={year} />
        <TouchableOpacity style={styles.button} onPress={this.toggleHitting}>
          <Text>Toggle Hitting</Text>
        </TouchableOpacity>
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
