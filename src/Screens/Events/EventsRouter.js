import { StackNavigator } from 'react-navigation';

import EventsScreen from './Events';

export default StackNavigator({
  Home: {
    screen: EventsScreen,
    navigationOptions: {
      title: 'Events',
    },
  },
}, {
  navigationOptions: {
    headerTintColor: '#000000',
    headerStyle: {
      backgroundColor: '#ff8c00',
      height: 30,
    },
  },

});
