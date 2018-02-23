import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getEvents } from '../../firebase/events/api';
import monthParser from '../../utils/monthParser';

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
        title: 'Loading',
        data: [
          { eventName: 'Ensure valid internet connection' },
          { attendees: [{ id: '', attendence: '' }] },
        ],
      },
    ],
  };

  componentDidMount() {
    getEvents((snap) => {
      const events = snap;
      const orderedEvents = [];
      const formattedEvents = [];

      for (let i = 1; i < events.length; i++) {
        const event = events[i];
        if (event) {
          const currentDate = event.date;

          // Data shape = [
          //   { event.currentdate: year-Month-Day },
          //   { data: data of event },
          // ]

          let found = false;

          for (let x = 0; x < orderedEvents.length; x++) {
            const prevEvent = orderedEvents[x - 1];
            if (prevEvent) {
              if (prevEvent.date < currentDate && orderedEvents[x].date > currentDate) {
                orderedEvents.splice(x, 0, event);
                found = true;
              }
            } else if (orderedEvents[x].date > currentDate) {
              orderedEvents.splice(x, 0, event);
              found = true;
            }
          }
          if (found === false) {
            orderedEvents.push(event);
          }
        }
      }

      for (let n = 0; n < orderedEvents.length; n++) {
        const date = orderedEvents[n].date.toString();
        const monthNo = date[2] + date[3];
        const monthName = monthParser(monthNo);
        const quickInfo = `${date[4] + date[5]} - ${orderedEvents[n].location}`;
        let found = false;

        if (orderedEvents[n - 1]) {
          if (
            orderedEvents[n - 1].date.toString()[2] + orderedEvents[n - 1].date.toString()[3] ===
            monthNo
          ) {
            found = true;
            formattedEvents[n - 1].data.push(orderedEvents[n]);
            // .data.push(orderedEvents[n]);
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
    let localCoachBool;
    this.props.screenProps.coachBool.then((result) => {
      localCoachBool = result;
    });
    console.warn(`2 ${localCoachBool}`);
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Events
          sections={this.state.events}
          renderItem={({ item }) => (
            <EventButton
              underlayColor="#232A3030"
              onPress={() =>
                (localCoachBool
                  ? navigate('EventDetailAthlete', { item })
                  : navigate('EventDetailManager', { item }))
              }
            >
              <View>
                <EventTitle>{item.eventName}</EventTitle>
                <EventQuickInfo>{`${item.date} - ${item.location}`} </EventQuickInfo>
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
