import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  onPressYear = () => {
    // console.log('press year');
    this.props.navigation.navigate('StandingsList');
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="default" translucent={false} />
        <Text onPress={this.onPressYear}>Go to Standings List</Text>
      </Container>
    );
  }
}

export default Home;
