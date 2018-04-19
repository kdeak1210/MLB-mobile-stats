import React, { Component } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { YearItem, Separator } from '../components/List';

class YearList extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  onSelectYear = year => {
    // TODO: Dispatch action, setting the selected Year in the store
    console.log(year);
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={['2012', '2013', '2014', '2015', '2016']}
          renderItem={({ item }) => (
            <YearItem year={item} onPress={this.onSelectYear} />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default YearList;
