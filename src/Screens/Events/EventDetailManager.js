import React from 'react';
import { Animated, Alert } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import firebaseApp from '../../firebase/firebaseConfig';
import { getAthleteData, deleteEvent } from '../../firebase/events/api';
import monthParser from '../../utils/monthParser';
import dateSuffix from '../../utils/dateSuffix';
import eliminateZero from '../../utils/eliminateZero';

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

const DeleteEventButton = styled.TouchableOpacity`
  padding-right: 8px;
`;

export default class EventDetailAthleteScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <DeleteEventButton
        onPress={() =>
          Alert.alert('Delete Event', 'Are you sure you want to delete the event?', [
            {
              text: 'Yes',
              onPress: () => {
                navigation.goBack();
                deleteEvent(navigation.state.params.item.id);
              },
              style: 'cancel',
            },
            {
              text: 'No',
              onPress: () => {},
            },
          ])
        }
      >
        <Icon name="delete" size={26} color="#232A30" />
      </DeleteEventButton>
    ),
  });

  static propTypes = {};

  static defaultProps = {};

  state = {};

  generateLists(attendees) {
    getAthleteData((callback) => {
      const athletes = callback;
      console.warn(Object.keys(attendees).length);
      for (let i = 0; i < Object.keys(attendees).length; i++) {
        console.warn(`hello ${attendees[Object.keys(attendees)[i]]}`);
        // socreAthletesEvents(callback)
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <MainContainer>
        <Header>
          <EventTitle> {this.props.navigation.state.params.item.eventName} </EventTitle>
          <EventSub>
            {' '}
            {eliminateZero(this.props.navigation.state.params.item.date[4])}
            {''}
            {this.props.navigation.state.params.item.date[5]}
            {dateSuffix(this.props.navigation.state.params.item.date[4] +
                this.props.navigation.state.params.item.date[5])}{' '}
            {monthParser(this.props.navigation.state.params.item.date[2] +
                this.props.navigation.state.params.item.date[3])}{' '}
          </EventSub>
          <EventSub> {this.props.navigation.state.params.item.location} </EventSub>
        </Header>
        <NotesContainer>
          <EventNotes>{this.props.navigation.state.params.item.information}</EventNotes>
        </NotesContainer>
        <BottomContainer>
          <AttendanceContainer>
            <AttendanceButton
              style={{ backgroundColor: '#00C853' }}
              onPress={() => this.generateLists(this.props.navigation.state.params.item.attendees)}
            >
              <AttendanceText> Attending athletes </AttendanceText>
            </AttendanceButton>
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
