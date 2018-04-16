import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { AppBrand } from '../components/Brand';
import { InputWithButton } from '../components/TextInput';

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
        <AppBrand />
        <InputWithButton
          buttonText="Year"
          onPress={this.onPressYear}
          value="(Selected year)"
          editable={false}
        />
      </Container>
    );
  }
}

export default Home;
