import { StyleSheet, Dimensions } from 'react-native';

const IMAGE_WIDTH = Dimensions.get('window').width / 2;

export default StyleSheet.create({
  appContainer: {
    alignItems: 'center',
    paddingBottom: 20
  },
  appLogoContainer: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9bc53d',
    borderRadius: 50
  },
  appLogo: {
    flex: 1,
    margin: 20
  },
  titleText: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    color: '#fff'
  },
  subText: {
    textAlign: 'center',
    paddingHorizontal: 22,
    fontSize: 16,
    color: '#fff'
  },
  teamContainer: {
    paddingTop: 40,
    paddingBottom: 20
  },
  teamLogo: {
    maxHeight: 150,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  teamDescription: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center'
  }
});
