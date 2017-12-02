import { StackNavigator } from 'react-navigation';

import HomeScreen from './Home';

export default StackNavigator({
  HomeS: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
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
