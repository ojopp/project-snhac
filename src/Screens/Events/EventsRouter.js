import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EventsScreen from './Events';
import EventDetailScreen from './EventDetail';


const EventStack = StackNavigator({
  Home: {
    screen: EventsScreen,
    navigationOptions: {
      title: 'Events',
    },
  },
  EventDetail: {
    screen: EventDetailScreen,
    navigationOptions: {
      title: 'Event Details',
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

export default class ProfileRouter extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="event" size={34} color={tintColor} />
    ),
  }

  render() {
    return (
      <EventStack screenProps={this.props.screenProps} />
    );
  }
}
