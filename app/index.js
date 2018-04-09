import React from 'react';
import { YellowBox } from 'react-native';

// import Home from './screens/Home';
// import StandingsList from './screens/StandingsList';
import SeasonalStats from './screens/SeasonalStats';

/** Temporarily silence deprecation warnings for development until
 * fix is issued in React Native 0.55.2 */
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated'
]);

export default () => <SeasonalStats />;
