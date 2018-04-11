import { StyleSheet } from 'react-native';

const fontSize = 17;

export default StyleSheet.create({
  teamRow: {
    paddingHorizontal: 22,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e9932'
  },
  teamIconContainer: {
    width: 50,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  teamIcon: {
    width: 42,
    resizeMode: 'contain'
  },
  teamName: {
    color: '#fff',
    fontSize,
    fontWeight: '800',
    paddingLeft: 32,
    marginRight: 'auto'
  },
  separator: {
    marginHorizontal: 16,
    backgroundColor: '#f9f9f9',
    flex: 1,
    height: 1
  },
  recordContainer: {
    flexDirection: 'row'
  },
  wins: {
    color: '#174e70',
    fontWeight: '800',
    fontSize
  },
  hyphen: {
    paddingHorizontal: 10,
    fontSize
  },
  losses: {
    color: '#c42813',
    fontWeight: 'bold',
    fontSize
  },
  ratio: {
    color: '#fff',
    paddingHorizontal: 8,
    fontSize
  }
});
