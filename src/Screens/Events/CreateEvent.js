import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import firebaseApp from '../../firebase/firebaseConfig';
import { getAthleteData, createEvent } from '../../firebase/events/api';
import Input from '../../components/Input';

const MainContainer = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const EventInformation = styled.TextInput`
  width: 300px;
  flex: 1;
  font-size: 16px;
  margin-top: 10px;
  color: #232a30ee;
  padding-left: 12px;
  align-self: center;
  border-radius: 18px;
  border-color: #232a30;
  border-width: 2px;
  background-color: #232a3000;
`;

const Button = styled.TouchableOpacity`
  height: 40px;
  width: 300px;
  border-radius: 20px;
  border-color: #232a30;
  border-width: 2px;
  justify-content: center;
  align-self: center;
  align-items: center;
  margin: 15px;
  background-color: #ff8c00;
`;

const ButtonText = styled.Text``;

export default class EventDetailAthleteScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: '',
      date: '',
      id: '',
      eventInfo: '',
      location: '',
    };
  }

  checkThenCreateEvent = () => {};

  render() {
    return (
      <MainContainer>
        <Input
          placeholder="Event name"
          onChangeText={value => this.setState({ eventName: value })}
          value={this.state.eventName}
        />
        <Input
          placeholder="Location"
          onChangeText={value => this.setState({ location: value })}
          value={this.state.location}
        />
        <Input
          placeholder="Date - YYMMDD"
          onChangeText={value => this.setState({ date: value })}
          value={this.state.date}
        />
        <EventInformation
          placeholderTextColor="#232A3090"
          underlineColorAndroid="transparent"
          placeholder="Event information"
          multiline
          onChangeText={value => this.setState({ eventInfo: value })}
          value={this.state.eventInfo}
        />
        <Button onPress={this.checkThenCreateEvent()}>
          <ButtonText> Create Event </ButtonText>
        </Button>
      </MainContainer>
    );
  }
}
