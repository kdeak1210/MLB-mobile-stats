import React, { Component } from 'react';
import { View, StatusBar, Text, Picker } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { AppBrand } from '../components/Brand';

const YEARS = ['2012', '2013', '2014', '2015', '2016'];

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  state = {
    selectedYear: '2016'
  };

  onSelectYear = event => {
    console.log(event);
    // this.props.navigation.navigate('YearList');
  };

  onPressStandings = () => {
    this.props.navigation.navigate('StandingsList');
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="default" translucent={false} />
        <AppBrand />
        <View style={{ borderColor: 'black', borderWidth: 1 }}>
          <Picker
            selectedValue={this.state.selectedYear}
            style={{
              height: 50,
              width: 150
            }}
            onValueChange={itemValue => {
              console.log(itemValue);
              this.setState({ selectedYear: itemValue });
            }}
          >
            {YEARS.map(year => (
              <Picker.Item key={year} label={year} value={year} />
            ))}
          </Picker>
        </View>

        <Text onPress={this.onPressStandings}>
          View Stats for {this.state.selectedYear}
        </Text>
      </Container>
    );
  }
}

export default Home;
