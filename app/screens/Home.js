import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { AppBrand } from '../components/Brand';
import { YearPicker } from '../components/Pickers';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  state = {
    selectedYear: '2016'
  };

  onSelectYear = event => {
    console.log(event);
    // TODO: Dispatch to Redux
    // this.setState({ selectedYear: event });
  };

  onPressStandings = () => {
    this.props.navigation.navigate('StandingsList');
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="default" translucent={false} />
        <AppBrand />
        <YearPicker
          selectedYear={this.state.selectedYear}
          onSelectYear={this.onSelectYear}
        />
        <Text onPress={this.onPressStandings}>
          View Stats for {this.state.selectedYear}
        </Text>
      </Container>
    );
  }
}

export default Home;
