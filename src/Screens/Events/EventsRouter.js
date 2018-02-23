import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AthleteEventsScreen from './Events';
import ManagerEventsScreen from './ManagerEvents';
import EventDetailAthleteScreen from './EventDetailAthlete';
import EventDetailManagerScreen from './EventDetailManager';
import CreateEventScreen from './CreateEvent';

const EventStack = StackNavigator(
  {
    AthleteHome: {
      screen: AthleteEventsScreen,
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
    ManagerHome: {
      screen: ManagerEventsScreen,
      navigationOptions: {
        title: 'Events',
      },
    },
    EventDetailManager: {
      screen: EventDetailManagerScreen,
      navigationOptions: {
        title: 'Events Details',
      },
    },
    CreateEvent: {
      screen: CreateEventScreen,
      navigationOptions: {
        title: 'Create New Event',
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
