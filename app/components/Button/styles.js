import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  standingsButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#948d9b',
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginTop: 40
  },
  standingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  standingsText: {
    paddingLeft: 14,
    color: '#ffe3dc',
    fontWeight: '500',
    fontSize: 16
  },
  buttonRow: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 14,
    margin: 16,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600'
  }
});
