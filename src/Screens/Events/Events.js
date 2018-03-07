import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getEvents } from '../../firebase/events/api';
import monthParser from '../../utils/monthParser';
import dateSuffix from '../../utils/dateSuffix';
import eliminateZero from '../../utils/eliminateZero';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Events = styled.SectionList``;

const EventButton = styled.TouchableHighlight``;

const EventTitle = styled.Text`
  font-size: 18;
  padding-vertical: 0px;
  padding-left: 10px;
`;

const EventQuickInfo = styled.Text`
  padding-left: 10px;
  padding-bottom: 2px;
`;

const SectionHeader = styled.Text`
  padding-vertical: 2;
  padding-horizontal: 10;
  font-size: 14;
  font-weight: bold;
  background-color: rgba(247, 247, 247, 1);
`;

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="event" size={34} color={tintColor} />,
  };

  state = {
    events: [
      {
        title: 'Loading..',
        data: [{ eventName: 'Loading..', date: 'Ensure valid internet conection', location: '' }],
      },
    ],
  };

  componentDidMount() {
    getEvents((snap) => {
      const events = snap;
      const orderedEvents = [];
      const formattedEvents = [];

      // Order events
      for (let i = 0; i < Object.keys(events).length; i++) {
        const currentDate = events[Object.keys(events)[i]].date;
        let found = false;
        let x = 0;
        if (orderedEvents.length > 0) {
          while (found === false) {
            if (currentDate > orderedEvents[x].date) {
              x += 1;
            } else {
              found = true;
            }
          }
          orderedEvents.splice(x, 0, events[Object.keys(events)[i]]);
        } else {
          orderedEvents.push(events[Object.keys(events)[i]]);
        }
      }

      orderedEvents.length -= 1;

      // Formatt events
      for (let n = 0; n < orderedEvents.length; n++) {
        const date = orderedEvents[n].date.toString();
        const monthNo = date[2] + date[3];
        const monthName = monthParser(monthNo);
        let found = false;
        if (orderedEvents[n - 1]) {
          if (
            orderedEvents[n - 1].date.toString()[2] + orderedEvents[n - 1].date.toString()[3] ===
            monthNo
          ) {
            found = true;
            formattedEvents[formattedEvents.length - 1].data.push(orderedEvents[n]);
          }
        }
        if (found === false) {
          formattedEvents.push({
            title: monthName,
            data: [orderedEvents[n]],
          });
        }
      }

      this.setState({ events: formattedEvents });
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Events
          sections={this.state.events}
          renderItem={({ item }) => (
            <EventButton
              underlayColor="#232A3030"
              onPress={() => navigate('EventDetailAthlete', { item })}
            >
              <View>
                <EventTitle>{item.eventName}</EventTitle>
                <EventQuickInfo>
                  {`${eliminateZero(item.date[4])}${item.date[5]}${dateSuffix(item.date[4] + item.date[5])} - ${item.location}`}
                </EventQuickInfo>
              </View>
            </EventButton>
          )}
          renderSectionHeader={({ section }) => <SectionHeader>{section.title}</SectionHeader>}
          keyExtractor={(item, index) => index}
        />
      </Container>
    );
  }
}
