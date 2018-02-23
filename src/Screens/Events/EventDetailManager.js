import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import firebaseApp from '../../firebase/firebaseConfig';
import { getAthleteData } from '../../firebase/events/api';

const MainContainer = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const Header = styled.View`
  padding-left: 5px;
  height: 80px;
`;

const EventTitle = styled.Text`
  font-size: 22;
  padding-top: 5px;
`;

const EventSub = styled.Text`
  font-size: 16;
  padding-vertical: 2px;
`;

const NotesContainer = styled.ScrollView`
  padding: 10px;
  flex: 1;
`;

const EventNotes = styled.Text`
  flex: 1;
  margin-bottom: 10px;
`;

const BottomContainer = styled.View`
  justify-content: flex-end;
`;

const AttendanceContainer = styled.View`
  align-items: flex-end;
  flex-direction: row;
  padding: 5px;
  border-top-width: 1;
  border-color: #232a3030;
  height: 60px;
  background-color: #ffffff;
`;

const AttendanceButton = styled.TouchableOpacity`
  height: 40px;
  border-radius: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const AnimatedAttendanceButton = Animated.createAnimatedComponent(AttendanceButton);

const AttendanceText = styled.Text`
  color: #000000;
  font-size: 17;
`;

export default class EventDetailAthleteScreen extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  generateLists(attendees) {
    getAthleteData((callback) => {
      const athletes = callback;
      console.warn(attendees.length);
      for (let i = 0; i < attendees.length; i++) {
        console.warn(`hello${athletes.attendees[(i, 1)]}`);
        // socreAthletesEvents(callback)
      }
    });
  }

  render() {
    return (
      <MainContainer>
        <Header>
          <EventTitle> {this.props.navigation.state.params.item.eventName} </EventTitle>
          <EventSub> Saturday 28th April </EventSub>
          <EventSub> {this.props.navigation.state.params.item.location} </EventSub>
        </Header>
        <NotesContainer>
          <EventNotes>{this.props.navigation.state.params.item.information}</EventNotes>
        </NotesContainer>
        <BottomContainer>
          <AttendanceContainer>
            <AttendanceButton
              style={{ backgroundColor: '#ff8c00' }}
              onPress={() => this.generateLists(this.props.navigation.state.params.item.attendees)}
            >
              <AttendanceText> Generate team </AttendanceText>
            </AttendanceButton>
          </AttendanceContainer>
        </BottomContainer>
      </MainContainer>
    );
  }
}
