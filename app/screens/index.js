import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from './Home';
import SeasonalStats from './SeasonalStats';
import StandingsList from './StandingsList';

/** Each screen takes a key: object pairing.
 *  Home is defined first, so it is the initial route (homepage)
 */
export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        // Dont render the header (ex nav w/ back button) on Home screen
        header: () => null
      }
    },
    StandingsList: {
      screen: StandingsList,
      navigationOptions: {
        headerTitle: 'Standings List'
      }
    },
    SeasonalStats: {
      screen: SeasonalStats,
      navigationOptions: {
        headerTitle: 'Seasonal Stats'
      }
    }
  },
  {
    headerMode: 'screen', // Navbar comes and goes with screen
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight }
    // navigationOptions: {
    //   headerStyle: { height: 40 }
    // }
  }
);
