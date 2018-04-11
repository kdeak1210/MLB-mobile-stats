import { StyleSheet } from 'react-native';

export const BACKGROUND_COLOR = '#1e9932';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND_COLOR
  },
  containerFluid: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR
  }
});
