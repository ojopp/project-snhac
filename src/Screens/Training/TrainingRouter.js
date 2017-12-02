import { StackNavigator } from 'react-navigation';

import TrainingScreen from './Training';

export default StackNavigator({
  Home: {
    screen: TrainingScreen,
    navigationOptions: {
      title: 'Training',
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
