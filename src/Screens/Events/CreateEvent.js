import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import { createEvent } from '../../firebase/events/api';
import Input from '../../components/Input';
import MeetTimetableRow from '../../components/MeetTimetableRow';

const MainContainer = styled.ScrollView`
  background-color: #ffffff;
  flex: 1;
`;

const SubContainer = styled.KeyboardAvoidingView``;

const EventInformation = styled.TextInput`
  width: 300px;
  height: 300px;
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
  justify-content: center;
  align-self: center;
  align-items: center;
  margin: 15px;
  background-color: #ff8c00;
`;

const MeetTimetable = styled.View`
  flex: 1;
  width: 300px;
  height: 300px;
  align-self: center;
  margin-top: 10px;
  border-top-width: 2px;
  border-color: #232a30;
`;

const ButtonText = styled.Text``;

export default class EventDetailAthleteScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: '',
      date: '',
      id: Date(),
      eventInfo: '',
      location: '',
      time100m: '',
      time200m: '',
      time400m: '',
      time800m: '',
      time1500m: '',
      time110mH: '',
      timeHJ: '',
      timeLJ: '',
      timePV: '',
      timeTJ: '',
    };
  }

  checkThenCreateEvent = () => {};

  render() {
    const { navigate } = this.props.navigation;
    return (
      <MainContainer scroll="enabled">
        <SubContainer behavior="padding">
          <Input
            placeholder="Event name"
            onChangeText={value => this.setState({ eventName: value })}
            value={this.state.eventName}
            autoCapitalize="words"
          />
          <Input
            placeholder="Location"
            onChangeText={value => this.setState({ location: value })}
            value={this.state.location}
            autoCapitalize="sentences"
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
          <MeetTimetable>
            <MeetTimetableRow
              eventName="100m"
              onChangeText={value => this.setState({ time100m: value })}
              value={this.state.time100m}
            />
            <MeetTimetableRow
              eventName="200m"
              onChangeText={value => this.setState({ time200m: value })}
              value={this.state.time200m}
            />
            <MeetTimetableRow
              eventName="400m"
              onChangeText={value => this.setState({ time400m: value })}
              value={this.state.time400m}
            />
            <MeetTimetableRow
              eventName="800m"
              onChangeText={value => this.setState({ time800m: value })}
              value={this.state.time800m}
            />
            <MeetTimetableRow
              eventName="1500m"
              onChangeText={value => this.setState({ time1500m: value })}
              value={this.state.time1500m}
            />
            <MeetTimetableRow
              eventName="110mH"
              onChangeText={value => this.setState({ time110mH: value })}
              value={this.state.time110mH}
            />
            <MeetTimetableRow
              eventName="HJ"
              onChangeText={value => this.setState({ timeHJ: value })}
              value={this.state.timeHJ}
            />
            <MeetTimetableRow
              eventName="LJ"
              onChangeText={value => this.setState({ timeLJ: value })}
              value={this.state.timeLJ}
            />
            <MeetTimetableRow
              eventName="PV"
              onChangeText={value => this.setState({ timePV: value })}
              value={this.state.timePV}
            />
            <MeetTimetableRow
              eventName="TJ"
              onChangeText={value => this.setState({ timeTJ: value })}
              value={this.state.timeTJ}
            />
          </MeetTimetable>

          <Button
            onPress={() => {
              createEvent(
                this.state.eventName,
                this.state.date,
                this.state.eventInfo,
                this.state.location,
                this.state.id,
                this.state.time100m,
                this.state.time200m,
                this.state.time400m,
                this.state.time800m,
                this.state.time1500m,
                this.state.time110mH,
                this.state.timeHJ,
                this.state.timeLJ,
                this.state.timePV,
                this.state.timeTJ,
              );
              this.props.navigation.goBack();
            }}
          >
            <ButtonText> Create Event </ButtonText>
          </Button>
        </SubContainer>
      </MainContainer>
    );
  }
}
