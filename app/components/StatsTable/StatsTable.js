import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import TableItem from './TableItem';
import { ButtonRow, StatsToggle } from '../Button';
import { NUM_COLUMNS } from './styles';

class StatsTable extends Component {
  static propTypes = {
    stats: PropTypes.object
    // isFetching: PropTypes.bool
  };

  state = {
    selectedStats: 'hitting'
  };

  toggleHitting = () => this.setState({ selectedStats: 'hitting' });
  togglePitching = () => this.setState({ selectedStats: 'pitching' });
  toggleFielding = () => this.setState({ selectedStats: 'fielding' });

  render() {
    const { stats = {} } = this.props;

    return (
      <View>
        <ButtonRow>
          <StatsToggle name="hitting" onPress={this.toggleHitting} />
          <StatsToggle name="pitching" onPress={this.togglePitching} />
          <StatsToggle name="fielding" onPress={this.toggleFielding} />
        </ButtonRow>
        <View style={{ flex: 1 }}>
          <FlatList
            data={stats[this.state.selectedStats]}
            renderItem={({ item }) => <TableItem {...item} />}
            keyExtractor={item => item.name}
            numColumns={NUM_COLUMNS}
          />
        </View>
      </View>
    );
  }
}

export default StatsTable;
