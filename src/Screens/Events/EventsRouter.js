import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EventsScreen from './Events';
import EventDetailAthleteScreen from './EventDetailAthlete';
import EventDetailManagerScreen from './EventDetailManager';

const EventStack = StackNavigator(
  {
    Home: {
      screen: EventsScreen,
      navigationOptions: {
        title: 'Events',
      },
    },
    EventDetailAthlete: {
      screen: EventDetailAthleteScreen,
      navigationOptions: {
        title: 'Event Details',
      },
    },
    EventDetailManager: {
      screen: EventDetailManagerScreen,
      navigationOptions: {
        title: 'Events Details',
      },
    },
  },
  {
    navigationOptions: {
      headerTintColor: '#000000',
      headerStyle: {
        backgroundColor: '#ff8c00',
        height: 30,
      },
    },
  },
);

export default class ProfileRouter extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="event" size={34} color={tintColor} />,
  };

  render() {
    return <EventStack screenProps={this.props.screenProps} />;
  }
}
