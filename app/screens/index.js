import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from './Home';
import SeasonalStats from './SeasonalStats';
import StandingsList from './StandingsList';

const HomeStack = new StackNavigator(
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
      navigationOptions: ({ navigation }) => {
        // Access title data from the params passed from the pervious component
        const { name, year } = navigation.state.params;
        return { headerTitle: `${name} ${year} stats` };
      }
    }
  },
  {
    headerMode: 'screen' // Navbar comes and goes with screen
    // navigationOptions: {
    //   headerStyle: { height: 40 }
    // }
  }
);

export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight }
    // navigationOptions: {
    //   headerStyle: { height: 40 }
    // }
  }
);
