import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { AppBrand } from '../components/Brand';
import { YearPicker } from '../components/Pickers';
import { yearSelected } from '../actions/standings';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    selectedYear: PropTypes.string,
    yearSelected: PropTypes.func
  };

  onSelectYear = event => {
    this.props.yearSelected(event);
  };

  onPressViewStandings = () => {
    this.props.navigation.navigate('StandingsList');
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="default" translucent={false} />
        <AppBrand />
        <YearPicker
          selectedYear={this.props.selectedYear}
          onSelectYear={this.onSelectYear}
        />
        <Ionicons name="md-stats" size={32} color="gray" />
        <Text onPress={this.onPressViewStandings}>
          View Standings for {this.props.selectedYear}
        </Text>
      </Container>
    );
  }
}

const stateToProps = state => ({
  selectedYear: state.standings.selectedYear
});

export default connect(stateToProps, { yearSelected })(Home);
