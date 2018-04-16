import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default StyleSheet.create({
  container: {
    backgroundColor: '#948d9b',
    width: '80%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '#3c5a14'
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1, // Takes up all space left-over after creating button
    fontSize: 18,
    paddingHorizontal: 8,
    color: '#000'
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth, // Smallest width available on device
    backgroundColor: '#f9f9f9'
  }
});
