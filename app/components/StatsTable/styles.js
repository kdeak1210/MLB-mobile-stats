import { StyleSheet, Dimensions } from 'react-native';

export const NUM_COLUMNS = 3;
export const SIZE = Dimensions.get('window').width / NUM_COLUMNS;

export default StyleSheet.create({
  statContainer: {
    width: SIZE,
    height: 'auto'
  },
  textContainer: {
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statName: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    borderBottomWidth: 1.0,
    borderBottomColor: '#ddd'
  },
  statValue: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    paddingVertical: 6
  }
});
