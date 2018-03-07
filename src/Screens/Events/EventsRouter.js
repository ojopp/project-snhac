import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AthleteEventsScreen from './Events';
import EventDetailAthleteScreen from './EventDetailAthlete';
import ManagerEventsScreen from './ManagerEvents';
import EventDetailManagerScreen from './EventDetailManager';
import CreateEventScreen from './CreateEvent';
import AttendingAthletesScreen from './AttendingAthletes';
import GenerateTeamScreen from './GenerateTeam';

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

const ManagerEventStack = StackNavigator(
  {
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
    AttendingAthletes: {
      screen: AttendingAthletesScreen,
      navigationOptions: {
        title: 'Attending Athletes',
      },
    },
    GenerateTeam: {
      screen: GenerateTeamScreen,
      navigationOptions: {
        title: 'Team Sheet',
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
    if (this.props.screenProps.managerBool === 'false') {
      return <ManagerEventStack screenProps={this.props.screenProps} />;
    }
    return <EventStack screenProps={this.props.screenProps} />;
  }
}
