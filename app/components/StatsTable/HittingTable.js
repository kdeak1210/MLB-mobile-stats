import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import TableItem from './TableItem';
import { NUM_COLUMNS } from './styles';

const HittingTable = ({ stats }) => (
  <FlatList
    data={stats}
    renderItem={({ item }) => <TableItem {...item} />}
    keyExtractor={item => item.name}
    numColumns={NUM_COLUMNS}
  />
);

HittingTable.propTypes = {
  stats: PropTypes.array
};

export default HittingTable;
