import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';

// import Home from './screens/Home';
// import StandingsList from './screens/StandingsList';
// import SeasonalStats from './screens/SeasonalStats';

import Navigator from './screens';
import store from './config/store';

/** Temporarily silence deprecation warnings for development until
 * fix is issued in React Native 0.55.2 */
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated'
]);

export default () => (
  <Provider store={store.configure()}>
    <Navigator />
  </Provider>
);
