import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { AppBrand } from '../components/Brand';
import { YearPicker } from '../components/Pickers';
import { StandingsButton } from '../components/Button';
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
    const { navigation, selectedYear } = this.props;
    navigation.navigate('StandingsList', { selectedYear });
  };

  render() {
    const { selectedYear } = this.props;
    return (
      <Container>
        <StatusBar barStyle="default" translucent={false} />
        <AppBrand />
        <YearPicker
          selectedYear={selectedYear}
          onSelectYear={this.onSelectYear}
        />
        <StandingsButton
          selectedYear={selectedYear}
          onPress={this.onPressViewStandings}
        />
      </Container>
    );
  }
}

const stateToProps = state => ({
  selectedYear: state.standings.selectedYear
});

export default connect(stateToProps, { yearSelected })(Home);
